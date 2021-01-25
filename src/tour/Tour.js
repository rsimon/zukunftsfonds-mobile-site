import axios from 'axios';
import bbox from '@turf/bbox';

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

}

/** Instantiate a tour object, return the promise, and map result to the tour itself **/
export const loadTour = name => {
  const tour = new Tour();
  return tour.load(name).then(() => tour);
}