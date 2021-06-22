import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import centroid from '@turf/centroid';
import PageWithMenu from '../PageWithMenu';
import { useI18N } from '../i18n';
import { navigateTo } from '../profiles/Utils';
import Curve from './Curve';
import L from 'leaflet';

import './OverviewMap.scss';

const drawArrow = (path, curveLayer, markerLayer, onClick) => {
  const start = centroid(path.begins).geometry.coordinates.reverse();
  const end = centroid(path.ends).geometry.coordinates.reverse();

  const arrow = new Curve(
    start, 
    end, 
    curveLayer, 
    markerLayer);

  arrow.onClick(onClick);
}

const getDistinctPaths = paths => {
  const distinct =  {};

  paths.forEach(p => {
    // Path is defined by the URIs of its start & end
    const key = `${p.begins['@id']}-${p.ends['@id']}`;
    
    // Keep only the last, so that we render only one arc
    distinct[key] = p;
  });

  return Object.values(distinct);
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

      const curveLayer = L.layerGroup().addTo(map);
      const markerLayer = L.layerGroup().addTo(map);

      getDistinctPaths(props.store.lifePaths)
        .forEach(l => drawArrow(l, curveLayer, markerLayer, onClick(l)));
    }
  });

  return (
    <PageWithMenu 
      backButton
      title="Map"
      className="overview-map"
      title={i18n('Map')}
      {...props}>

      <div className="overview-map-container">
        <Map 
          ref={mapRef}
          zoom={10}
          preferCanvas={true}
          attributionControl={false}
          style={{height:'100%'}}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </Map>
      </div>
    </PageWithMenu>
  )

}

export default OverviewMap;