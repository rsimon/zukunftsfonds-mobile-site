import axios from 'axios';
import * as JsSearch from 'js-search';
import centroid from '@turf/centroid';

import { getRelatedItems } from '../profiles/RelatedItems';
import { hasGeometry } from '../profiles/Utils';
import CRM from '../CRM';

/**
 * Helper to compute the bounding box of all places in the dataset.
 */
const computeGeoBounds = places => {
  const coords = places.reduce((allCoords, p) => {
    const g = p.geometry;

    // Support all the ways in which the data encodes point/poly coords
    if (g.coordinates) {
      if (Array.isArray(g.coordinates[0])) {
        if (Array.isArray(g.coordinates[0][0]))
          return allCoords.concat(...g.coordinates);
        else 
          return allCoords.concat(g.coordinates);
      } else {
        // Single coordinate tuple
        return allCoords.concat([ g.coordinates ]);
      }
    } else {
      return allCoords;
    }
  }, []);

  const lons = coords.map(t => t[0]);
  const lats = coords.map(t => t[1]); 

  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);

  return [
    [ minLat, minLon ],
    [ maxLat, maxLon ]
  ];
}

/**
 * Helper to compute the spatial 'life paths' of all actors, i.e. the 
 * pairs of coordinates for actor 'begins_in' and 'ends_in' properties.
 * 
 * Note that the computation will filter out places that don't have
 * coordinates.
 */
const computeLifePaths = (store, actors) => {
  const paths = actors.reduce((paths, actor) => {
    let { begins_in, ends_in } = getRelatedItems(actor, store).places; // .filter(p => hasGeometry(p));
    
    begins_in = begins_in.filter(p => hasGeometry(p));
    ends_in = ends_in.filter(p => hasGeometry(p));

    if (begins_in.length > 0 && ends_in.length > 0) {
      return [ ...paths, {
        actor, 
        begins: begins_in[0],
        ends: ends_in[0]
      }];
    } else {
      return paths;
    }
  }, []);

  // Sort paths by distance
  paths.sort((a, b) => {
    const [ aBegins, aEnds ] = [
      centroid(a.begins).geometry.coordinates,
      centroid(a.ends).geometry.coordinates
    ];

    const [ bBegins, bEnds ] = [
      centroid(b.begins).geometry.coordinates,
      centroid(b.ends).geometry.coordinates
    ]; 

    const distA = Math.sqrt(Math.pow(aEnds[0] - aBegins[0], 2) + Math.pow(aEnds[1] - aBegins[1], 2));
    const distB = Math.sqrt(Math.pow(bEnds[0] - bBegins[0], 2) + Math.pow(bEnds[1] - bBegins[1], 2));

    return distA - distB;
  });

  return paths;
}

/**
 * Because (fortunately) our data is static, the data store
 * is just a convenience wrapper over the JSON data files. 
 */
export default class DataStore {

  constructor() {
    this.actors = [];
    this.places = [];

    // Geo-bounds of all places in the dataset
    this.geoBounds = null;

    // The 'life paths', pairs of coordinates for actors'
    // begins_in/ends_in properties
    this.lifePaths = [];

    this.search = new JsSearch.Search('@id');   
    this.search.tokenizer = {
      tokenize(text) {
        return text
          .replace(/[.,'"#!$%^&*;:{}=\-_`~()]/g, '')
          .split(/[\s,-]+/)
      }
    };

    this.search.addIndex([ 'properties', 'title' ]); 
  }

  load() {
    const loadFile = entityType => 
      axios.get(`data/items_${entityType}.json`).then(response =>
        response.data.result.reduce((items, next) => items.concat(next.features), []));
    
    const responses = Promise.all([
      loadFile('actor'),
      loadFile('place')
    ]);

    return responses.then(arr => {
      const [ actors, places ] = arr;

      this.actors = actors;
      this.places = places;

      this.geoBounds = computeGeoBounds(places);
      this.lifePaths = computeLifePaths(this, actors);

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
      rel.relationTo === id && rel.relationType === CRM.P53_has_former_or_current_location));
  }

  getActorsWithLocation(id) {
    const relevantTypes = [
      CRM.OA8_begins_in,
      CRM.OA9_ends_in,
      CRM.P74_has_current_or_former_residence
    ];

    return this.actors.filter(actor => actor.relations.find(rel => 
      rel.relationTo === id && relevantTypes.includes(rel.relationType)));
  }
  
}
