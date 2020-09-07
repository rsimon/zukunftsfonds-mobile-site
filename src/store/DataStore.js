import axios from 'axios';

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  load() {
    return axios.get('/data/oberhollabrunn_personen.json').then(response => {
      // TODO
      console.log(response.data);
    });
  }
  
}
