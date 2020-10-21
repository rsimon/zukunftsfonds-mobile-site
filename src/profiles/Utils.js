import ActorProfile from '../profiles/ActorProfile';
import PlaceProfile from '../profiles/PlaceProfile';

const PROFILE_COMPONENTS = {
  'crm:E18_Physical_Thing': PlaceProfile,
  'crm:E21_Person': ActorProfile,
  'crm:E74_Group': ActorProfile
}

/** Returns the right JSX profile component for this item **/
export const getProfileComponent = item => PROFILE_COMPONENTS[item.crmClass];

/** Returns a handler function for navigating to the view appropriate to the given item **/
export const navigateTo = (item, navigator) => _ =>
  navigator.pushPage({ component: getProfileComponent(item), item });

/** Returns the residences linked to an actor **/
export const getResidences = (actor, store) => {
  // CRM 'hasCurrentOrFormerResidence' relations on actor (if any)
  const residences = actor.relations.filter(rel =>
    rel.relationType === 'crm:P74_has_current_or_former_residence');

  // Relation points to location -> get place
  return residences.map(rel =>
    store.getPlaceWithLocation(rel.relationTo));
}

/** Returns the actors linke to a place **/
export const getActors = (place, store) => {
  // CRM 'hasFormerOrCurrentLocation' relations on place (if any)
  const location = place.relations.find(rel =>
    rel.relationType === 'crm:P53_has_former_or_current_location');

  return location?.relationTo ? store.getActorsWithResidence(location.relationTo) : [];
}
