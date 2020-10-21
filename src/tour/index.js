/**
 * Wraps the location API call into a proper Promise.
 * 
 * Note that on Chrome, the Geolocation API only works on HTTPS.
 */
export const fetchUserLocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => resolve(pos), // Success
      () => reject() // Error
    );
  } else { 
    reject(); // Not supported
  }
});