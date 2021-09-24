import axios from 'axios';
import bbox from '@turf/bbox';
import distance from '@turf/distance';
import centroid from '@turf/centroid';

export const getBounds = geojson => {
  const corners = bbox(geojson);
  return [
    [ corners[1], corners[0] ],
    [ corners[3], corners[2] ]
  ];
}

const buildWaypointFeatures = (waypoints, store) => ({
  type: 'FeatureCollection',
  features: waypoints.map(waypoint => {
    const record = store.findById(waypoint.id);
    const latlon = centroid(record.geometry);
    const hasValidGeometry = latlon.geometry.coordinates.every(coord => !isNaN(coord));

    return hasValidGeometry && record.description && {
      type: 'Feature',
      properties: {
        title: record.properties.title.replace('Oberhollabrunn, Flüchtlingslager,', '').trim(),
        images: record.depictions,
        description: record.description.map(d => d.value).join('\n\n'),
        viewpoint: waypoint.lonlat.slice().reverse()
      },
      geometry: record.geometry
    }
  }).filter(f => f)
})

class Tour {

  load(tour, store) {
    return Promise.all([
      axios.get(`tours/${tour}-track.json`),
      axios.get(`tours/${tour}-waypoints.json`)
    ]).then(results => {
      this.track = results[0].data;
      
      // Allow GeoJSON feature collection or DB ID list
      this.waypoints = results[1].data.type === 'FeatureCollection' ?
        results[1].data : buildWaypointFeatures(results[1].data, store);

      this.bounds = getBounds(this.track);
    });
  }

  getProp(name) {
    return this.track.features[0].properties[name];
  }

  getDescription(language) {
    return language === 'en' ?
      this.getProp('description_en') : this.getProp('description_de');
  }

  get duration() {
    return this.getProp('duration_minutes');
  }

  get image() {
    return this.getProp('image');
  }

  get title() {
    return this.getProp('title');
  }

  getNearestWaypoint = pos => {
    if (pos) {
      const currentPos = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [ pos.coords.longitude, pos.coords.latitude ]
        }
      };

      const distances = this.waypoints.features.map(f => distance(currentPos, f));
      const minDistance = Math.min.apply(null, distances);

      return this.waypoints.features[distances.indexOf(minDistance)];
    }
  }

}

/** Instantiate a tour object, return the promise, and map result to the tour itself **/
export const loadTour = (name, store) => {
  const tour = new Tour();
  return tour.load(name, store).then(() => tour);
}

export const loadJourney = name =>
  axios.get(`tours/${name}-journey.json`)
    .then(response => response.data);