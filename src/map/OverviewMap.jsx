import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Map, CircleMarker, TileLayer } from 'react-leaflet';
import centroid from '@turf/centroid';
import L from 'leaflet';

import { overviewMapState } from '../store/State';
import PageWithMenu from '../PageWithMenu';
import { useI18N } from '../i18n';
import { hasGeometry, navigateTo } from '../profiles/Utils';
import Curve from './Curve';

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

  const [ mapState, setMapState ] = useRecoilState(overviewMapState);

  const onClick = path =>
    navigateTo(path.actor, props.navigator);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;

      // Restore map state or fit to initial bounds 
      if (mapState.center) {
        console.log('reset', mapState);
        map.setView(mapState.center, mapState.zoom);
      } else {
        map.fitBounds(props.store.geoBounds);
      }

      // "Lifepath" layers - show/hide depending on zoom level
      const curveLayer = L.layerGroup().addTo(map);
      const markerLayer = L.layerGroup().addTo(map);

      getDistinctPaths(props.store.lifePaths)
        .forEach(l => drawArrow(l, curveLayer, markerLayer, onClick(l)));

      map.on('zoomend', function() {
        const zoom = map.getZoom();
        const center = map.getCenter();
        setMapState({ zoom, center });

        if (zoom > 12) {
          // Remove lifepaths, unless hidden
          if (map.hasLayer(curveLayer)) {
            map.removeLayer(curveLayer);
            map.removeLayer(markerLayer);
          }
        } else {
          // Add lifepaths, unless shown
          if (!map.hasLayer(curveLayer)) {
            map.addLayer(curveLayer);
            map.addLayer(markerLayer);
          }
        }
      });

      map.on('moveend', function() {
        const zoom = map.getZoom();
        const center = map.getCenter();
        setMapState({ zoom, center });
      });
    }
  }, []);

  const placeStyle = {
    stroke: true,
    weigth: 2,
    color: '#8a6100',
    fillColor: '#8a6100',
    fillOpacity: 0.75,
    radius: 5
  }

  const places = props.store.places.map(feature => {
      if (hasGeometry(feature))
        return {
          feature,
          centroid: centroid(feature.geometry).geometry.coordinates.slice().reverse()
        }
    })
    .filter(lonLat => lonLat) // Remove unlocated
    .map(({ feature, centroid}) =>
      <CircleMarker 
        key={feature['@id']} 
        center={centroid} 
        onClick={navigateTo(feature, props.navigator)}
        {...placeStyle} />
    );

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

          { places }

        </Map>
      </div>
    </PageWithMenu>
  )

}

export default OverviewMap;