import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import centroid from '@turf/centroid';
import PageWithMenu from '../PageWithMenu';
import { useI18N } from '../i18n';

import 'leaflet-swoopy';

import './OverviewMap.scss';

const drawArrow = (path, map) => {
  const start = centroid(path.begins).geometry.coordinates.reverse();
  const end = centroid(path.ends).geometry.coordinates.reverse();

  L.swoopyArrow(start, end, {
    color:'#4e89ff',
    weight:2,
    factor:-0.5,
    hideArrowHead:true
  }).addTo(map);
}

const OverviewMap = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.store.geoBounds);
      props.store.lifePaths.forEach(l => drawArrow(l, map));
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