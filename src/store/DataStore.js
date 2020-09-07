import axios from 'axios';

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  constructor() {
    this.items = [];
  }

  load() {
    return axios.get('/data/oberhollabrunn_orte_e18.json').then(response => {
      this.items = response.data.reduce((places, next) => places.concat(next.features), []);
      console.log('loaded', this.items.length);
    });
  }

  findById(id) {
    console.log(id, this.items);
    return this.items.find(i => i['@id'] === id);
  }
  
}
