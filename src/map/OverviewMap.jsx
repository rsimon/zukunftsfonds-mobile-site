import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import centroid from '@turf/centroid';
import PageWithMenu from '../PageWithMenu';
import { useI18N } from '../i18n';
import { navigateTo } from '../profiles/Utils';
import Curve from './Curve';

import './OverviewMap.scss';

const drawArrow = (path, map, onClick) => {
  const start = centroid(path.begins).geometry.coordinates.reverse();
  const end = centroid(path.ends).geometry.coordinates.reverse();

  const arrow = new Curve(start, end).addTo(map);
  arrow.onClick(onClick);
}

const OverviewMap = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  const onClick = path =>
    navigateTo(path.actor, props.navigator);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.store.geoBounds);
      props.store.lifePaths.forEach(l => drawArrow(l, map, onClick(l)));
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