import CRM from '../CRM';

// De-duplicates the list of items, using their URI for equality
const distinct = items => {
  const uris = items.map(item => item['@id']);
  return items.filter((item, pos) => uris.indexOf(item['@id']) === pos);
}

/** Helper class to deal with related places/actors more easily **/
class RelatedItems {

  constructor(item, store) {
    this.item = item;
    this.store = store;
  }

  /**
   * If this item is an actor, it will have places connected to it.
   * This method performs a "forward lookup", based on the links
   * included in this item.
   * 
   * Returns an object with the following properties:
   * 
   * places.begins_in
   * places.ends_in
   * places.has_residence
   * places.all
   * 
   * TODO should we memoize this?
   */
  get places() {
    // Pick up the following CRM types
    const relevantTypes = [
      CRM.P74_has_current_or_former_residence,
      CRM.OA8_begins_in,
      CRM.OA9_ends_in
    ];

    // Relations with these types
    const relations = this.item.relations.filter(rel =>
      relevantTypes.includes(rel.relationType));

    // Resolve referred locations to places
    const places = relations.map(rel => ({
      label: rel.label, 
      relationType: rel.relationType,
      resolved: this.store.getPlaceWithLocation(rel.relationTo)
    }));

    // Shorthand
    const filter = relation =>
      places.filter(p => p.relationType === relation).map(obj => obj.resolved);

    // TODO add all unique places
    return {
      begins_in: filter(CRM.OA8_begins_in),
      ends_in: filter(CRM.OA9_ends_in),
      has_residence: filter(CRM.P74_has_current_or_former_residence),
      all: distinct(places.map(p => p.resolved)) // TODO de-duplicate
    }
  }

  /**
   * If this item is a place, other items in the store will have
   * connections to it. This method performs a "reverse lookup",
   * fetching every actor from the store that references this
   * place.
   */
  get actors() {
    const location = this.item.relations.find(rel => 
      rel.relationType === CRM.P53_has_former_or_current_location);

    return location ?
      this.store.getActorsWithLocation(location.relationTo) : [];
  }

}

export const getRelatedItems = (item, store) =>
  new RelatedItems(item, store);