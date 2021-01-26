import axios from 'axios';
import bbox from '@turf/bbox';
import distance from '@turf/distance';

const getBounds = geojson => {
  const corners = bbox(geojson);
  return [
    [ corners[1], corners[0] ],
    [ corners[3], corners[2] ]
  ];
}

class Tour {

  load(tour) {
    return Promise.all([
      axios.get(`tours/${tour}-track.json`),
      axios.get(`tours/${tour}-waypoints.json`)
    ]).then(results => {
      this.track = results[0].data;
      this.waypoints = results[1].data;
      this.bounds = getBounds(this.track);
    });
  }

  getProp(name) {
    return this.track.features[0].properties[name];
  }

  get description() {
    return this.getProp('description');
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
export const loadTour = name => {
  const tour = new Tour();
  return tour.load(name).then(() => tour);
}