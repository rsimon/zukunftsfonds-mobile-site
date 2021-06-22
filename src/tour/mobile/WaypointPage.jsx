import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import PageWithMenu from '../../PageWithMenu';
import MyPosition from '../map/MyPosition';
import NextStop from '../map/NextStop';
import InfoPanel from './InfoPanel';

import './WaypointPage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const WaypointPage = props => {

  const [ waypoint, setWaypoint ] = useState(props.tour.waypoints.features[0]);

  const [ pos, setPos ] = useState();

  const mapRef = useRef();

  const currentIdx = props.tour.waypoints.features.indexOf(waypoint);

  const fitBounds = () => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;

      let bounds = null;

      if (props.useGPS && pos) {
        // When using GPS, fit map to waypoint + current location
        const lons = [ pos.coords.longitude, waypoint.geometry.coordinates[0] ];
        const lats = [ pos.coords.latitude, waypoint.geometry.coordinates[1] ];

        bounds = [
          [ Math.min(...lats), Math.min(...lons) ],
          [ Math.max(...lats), Math.max(...lons) ]
        ];
      } else {
        // When not using GPS, just fit to tour path
        bounds = props.tour.bounds;
      }

      map.fitBounds(bounds, { 
        paddingTopLeft: [ 15, 15 ],
        paddingBottomRight: [ 10, window.innerHeight  / 2 ]
      });
    }
  }

  useEffect(() => {
    fitBounds();
    
    if (props.useGPS) {
      const watchId = navigator.geolocation?.watchPosition(pos => {
        setPos(pos);
      }, null, { enableHighAccuracy: true });

      return function cleanup() {
        navigator.geolocation?.clearWatch(watchId);
      }
    }
  }, []);

  useEffect(() => {
    fitBounds();
  }, [ waypoint ]);

  const onNextWaypoint = () => {
    const nextIdx = Math.min(currentIdx + 1, props.tour.waypoints.features.length - 1);
    setWaypoint(props.tour.waypoints.features[nextIdx]);
  }

  const onPrevWaypoint = () => {
    const prevIdx = Math.max(0, currentIdx - 1);
    setWaypoint(props.tour.waypoints.features[prevIdx]);
  }

  const onReturn = () =>
    props.navigator.popPage();

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

        <NextStop waypoint={waypoint} />
      </Map>

      <InfoPanel 
        tour={props.tour} 
        useGPS={props.useGPS}
        waypoint={waypoint} 
        waypointIdx={currentIdx}
        pos={pos} 
        isStart={currentIdx === 0}
        isEnd={currentIdx === props.tour.waypoints.features.length - 1}
        onNextWaypoint={onNextWaypoint}
        onPreviousWaypoint={onPrevWaypoint}
        onReturn={onReturn} />
    </PageWithMenu>
  )

}

export default WaypointPage;