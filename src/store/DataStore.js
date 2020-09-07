import axios from 'axios';

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  constructor() {
    this.places = [];
  }

  load() {
    return axios.get('/data/oberhollabrunn_orte_e18.json').then(response => {
      this.places = response.data.reduce((places, next) => places.concat(next.features), []);
    });
  }
  
}
