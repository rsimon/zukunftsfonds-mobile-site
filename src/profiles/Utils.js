import ActorProfile from '../profiles/ActorProfile';
import PlaceProfile from '../profiles/PlaceProfile';

const PROFILE_COMPONENTS = {
  'crm:E18_Physical_Thing': PlaceProfile,
  'crm:E21_Person': ActorProfile
}

/** Returns the right JSX profile component for this item **/
export const getProfileComponent = item => PROFILE_COMPONENTS[item.crmClass];

/** Helper to get the residence linked to an actor **/
export const getResidences = (item, store) => {
  // CRM 'hasCurrentOrFormerResidence' relations (if any)
  const residences = item.relations.filter(rel =>
    rel.relationType === 'crm:P74_has_current_or_former_residence');

  // Relation points to location -> get place
  return residences.map(rel =>
    store.getPlaceForLocation(rel.relationTo));
}

