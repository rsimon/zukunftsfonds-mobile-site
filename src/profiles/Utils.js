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

/** Helper to determine whether the item has any non-empty geometries **/
export const hasGeometry = item => {
  if (!item)
    return false; 

  if (!item.geometry)
    return false; 

  if (item.geometry.type === 'GeometryCollection')
    return item.geometry.geometries?.length > 0 && item.geometry.geometries[0].coordinates;

  return item.geometry?.coordinates?.length > 0;
}