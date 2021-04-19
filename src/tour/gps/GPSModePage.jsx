import React, { useEffect, useRef, useState } from 'react';
import { CircleMarker, GeoJSON, Map, TileLayer } from 'react-leaflet';
import PageWithMenu from '../../PageWithMenu';
import MyPosition from './MyPosition';
import InfoPanel from './InfoPanel';

import './GPSModePage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const GPSModePage = props => {

  const [ waypoint, setWaypoint ] = useState(props.tour.waypoints.features[0]);

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

    const watchId = navigator.geolocation?.watchPosition(pos => {
      setPos(pos);
      setWaypoint(props.tour.getNearestWaypoint(pos))
    }, null, {
      enableHighAccuracy: true
    });

    return function cleanup() {
      navigator.geolocation?.clearWatch(watchId);
    }
  }, []);

  const onNextWaypoint = () => {
    const currentIdx = props.tour.waypoints.features.indexOf(waypoint);

    console.log('current waypoint idx', currentIdx);

    const nextIdx = Math.min(currentIdx + 1, props.tour.waypoints.features.length - 1);

    console.log('next idx', nextIdx);
    
    console.log(props.tour.waypoints.features[nextIdx]);
    setWaypoint(props.tour.waypoints.features[nextIdx]);
  }

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
        <CircleMarker center={waypoint.geometry.coordinates.slice().reverse()} />
      </Map>

      <InfoPanel 
        tour={props.tour} 
        waypoint={waypoint} 
        pos={pos} 
        onNextWaypoint={onNextWaypoint}
        onPrevWaypoint={() => setWaypoint(Math.max(0, waypoint - 1))}/>
    </PageWithMenu>
  )

}

export default GPSModePage;