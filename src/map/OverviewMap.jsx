import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import PageWithMenu from '../PageWithMenu';
import { useI18N } from '../i18n';

import './OverviewMap.scss';

const OverviewMap = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.store.geoBounds);
    }
  });

  return (
    <PageWithMenu 
      className="overview-map"
      title={i18n('Map')}
      backButton
      navigator={props.navigator}>

      <div className="overview-map-container">
        <Map 
          ref={mapRef}
          zoom={10}
          style={{height:'100%'}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    </PageWithMenu>
  )

}

export default OverviewMap;