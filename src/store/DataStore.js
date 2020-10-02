import axios from 'axios';
import * as JsSearch from 'js-search';

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  constructor() {
    this.actors = [];
    this.events = [];
    this.places = [];

    this.search = new JsSearch.Search('@id');   
    this.search.addIndex([ 'properties', 'title' ]);  
  }

  load() {
    const loadFile = entityType => 
      axios.get(`/data/api/items_${entityType}.json`).then(response =>
        response.data[0].reduce((items, next) => items.concat(next.features), []));
    
    const responses = Promise.all([
      loadFile('actor'),
      loadFile('event'),
      loadFile('place')
    ]);

    return responses.then(arr => {
      const [ actors, events, places ] = arr;
      
      this.actors = actors;
      this.events = events;
      this.places = places;

      this.search.addDocuments([ ...actors, /* ...events ,*/ ...places ]);
    });
  }

  findById(id) {
    return this.items.find(i => i['@id'] === id);
  }

  searchAll(query) {
    return this.search.search(query.toLowerCase());
  }
  
}
