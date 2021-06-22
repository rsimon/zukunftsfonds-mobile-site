import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import NextStop from '../map/NextStop';
import { useI18N, useBilingual } from '../../i18n';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';
import ImageGroup from '../../ImageGroup';

import './WaypointPage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const WaypointPage = props => {

  const [ waypoint, setWaypoint ] = useState(props.tour.waypoints.features[0]);
  
  const i18n = useI18N();

  const mapRef = useRef();

  const getTranslation = useBilingual();

  useEffect(() => {
    if (mapRef.current && props.tour) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.tour.bounds, { padding: [ 15, 15 ]});
    }
  }, [ props.tour ]);

  const currentIdx = props.tour.waypoints.features.indexOf(waypoint);
  const isStart = currentIdx === 0;
  const isEnd = currentIdx === props.tour.waypoints.features.length - 1;

  return (
    <PageWithMenuDesktop
      className="tour-desktop"
      title={i18n('Walking Tour')}
      {...props}>

      <div className="map-container">
        <Map 
          ref={mapRef}
          zoomControl={false}
          attributionControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON { ...{...PATH_STYLE, data: props.tour.track }} />  
          <NextStop waypoint={waypoint} />
        </Map>
      </div>

      <div className="waypoint-description">
        <h1>
          { 
            isStart ? i18n('First Stop') : (
              isEnd ? i18n('Last Stop') : `${i18n('Stop')} ${currentIdx + 1}`
            )
          }
        </h1>

        <p>
          {getTranslation(waypoint.properties.description)}
        </p>
      </div>

      <ImageGroup depictions={waypoint.properties.images} />
    </PageWithMenuDesktop>
  )

}

export default WaypointPage;