import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import PageWithMenu from '../../PageWithMenu';
import MyPosition from './MyPosition';
import InfoPanel from './InfoPanel';

import './GPSModePage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const GPSModePage = props => {

  const [ waypoint, setWaypoint ] = useState(0);

  const [ pos, setPos ] = useState();

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.tour.bounds, { 
        paddingTopLeft: [ 15, 15 ],
        paddingBottomRight: [ 15, 200 ]
      });
    }

    const watchId = navigator.geolocation?.watchPosition(setPos);

    return function cleanup() {
      navigator.geolocation?.clearWatch(watchId);
    }
  }, []);

  return (
    <PageWithMenu 
      backButton
      className="tour-gps"
      title={props.tour.title}
      navigator={props.navigator}>

      <Map 
        ref={mapRef}
        zoomControl={false}
        attributionControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON { ...{...PATH_STYLE, data: props.tour.track }} />
        { pos && <MyPosition pos={pos} /> }
      </Map>

      <InfoPanel 
        tour={props.tour} 
        waypoint={waypoint} 
        pos={pos} 
        onNextWaypoint={() => setWaypoint(Math.min(waypoint + 1, props.tour.waypoints.length - 1))}
        onPrevWaypoint={() => setWaypoint(Math.max(0, waypoint - 1))}/>
    </PageWithMenu>
  )

}

export default GPSModePage;