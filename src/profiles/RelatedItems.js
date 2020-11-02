/** Helper class to deal with related places/actors more easily **/
class RelatedItems {

  constructor(item, store) {
    this.relations = item.relations;
    this.store = store;
  }

  /**
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
      'crm:P74_has_current_or_former_residence',
      'crm:OA8_begins_in',
      'crm:OA9_ends_in'
    ];

    // Relations with these types
    const relations =  this.relations.filter(rel =>
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
      begins_in: filter('crm:OA8_begins_in'),
      ends_in: filter('crm:OA9_ends_in'),
      has_residence: filter('crm:P74_has_current_or_former_residence')
    }
  }

  get actors() {

  }

}

const getRelatedItems = (item, store) =>
  new RelatedItems(item, store);

export default getRelatedItems;