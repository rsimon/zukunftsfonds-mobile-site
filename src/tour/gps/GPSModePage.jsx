import React, { useEffect, useRef, useState } from 'react';
import PageWithMenu from '../../PageWithMenu';
import MyPosition from './MyPosition';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';

import './GPSModePage.scss';


const GPSModePage = props => {

  const [ pos, setPos ] = useState();

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.tour.bounds, { padding: [ 15, 15 ]});
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
        <GeoJSON data={props.tour.track} />
        { pos && <MyPosition data={pos} /> }
      </Map>
    </PageWithMenu>
  )

}

export default GPSModePage;