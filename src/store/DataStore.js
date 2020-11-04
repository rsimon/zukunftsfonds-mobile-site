import axios from 'axios';
import * as JsSearch from 'js-search';

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  constructor() {
    this.actors = [];
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
      axios.get(`data/items_${entityType}.json`).then(response =>
        response.data[0].reduce((items, next) => items.concat(next.features), []));
    
    const responses = Promise.all([
      loadFile('actor'),
      loadFile('place')
    ]);

    return responses.then(arr => {
      const [ actors, places ] = arr;
      
      this.actors = actors;
      this.places = places;

      this.search.addDocuments([ ...actors, ...places ]);
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

  getActorsWithLocation(id) {
    const relevantTypes = [
      'crm:OA8_begins_in',
      'crm:OA9_ends_in',
      'crm:P74_has_current_or_former_residence'
    ];

    return this.actors.filter(actor => actor.relations.find(rel => 
      rel.relationTo === id && relevantTypes.includes(rel.relationType)));
  }
  
}
