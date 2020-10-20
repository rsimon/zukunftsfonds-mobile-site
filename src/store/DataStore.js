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
    this.search.tokenizer = {
      tokenize(text) {
        return text.split(/[\s,-]+/)
      }
    };

    this.search.addIndex([ 'properties', 'title' ]); 
  }

  load() {
    const loadFile = entityType => 
      axios.get(`data/api/items_${entityType}.json`).then(response =>
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

  getPlaceWithLocation(id) {
    return this.places.find(place => place.relations.find(rel => 
      rel.relationTo === id && rel.relationType === 'crm:P53_has_former_or_current_location'));
  }

  getActorsWithResidence(id) {
    return this.actors.filter(actor => actor.relations.find(rel => 
      rel.relationTo === id && rel.relationType === 'crm:P74_has_current_or_former_residence'));
  }
  
}
