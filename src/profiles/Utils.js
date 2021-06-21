import ActorProfile from './ActorProfile';
import PlaceProfile from './PlaceProfile';
import PlaceProfileDesktop from './PlaceProfileDesktop';
import CRM from '../CRM';

const PROFILE_COMPONENTS = {
  [CRM.E18_Physical_Thing]: PlaceProfile,
  [CRM.E21_Person]: ActorProfile,
  [CRM.E74_Group]: ActorProfile
}

const PROFILE_COMPONENTS_DESKTOP = {
  [CRM.E18_Physical_Thing]: PlaceProfileDesktop,
  [CRM.E21_Person]: ActorProfile,
  [CRM.E74_Group]: ActorProfile
}

/** Returns the right JSX profile component for this item **/
export const getProfileComponent = (item, isDesktop) => 
  isDesktop ? 
    PROFILE_COMPONENTS_DESKTOP[item.crmClass] :  
    PROFILE_COMPONENTS[item.crmClass];

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
