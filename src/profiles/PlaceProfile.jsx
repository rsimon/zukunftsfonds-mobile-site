import React, { useEffect, useRef } from 'react';
import { Icon, List, ListHeader, ListItem } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import bbox from '@turf/bbox';
import { getRelatedItems } from './RelatedItems';
import { navigateTo, hasGeometry } from './Utils';
import PageWithMenu from '../PageWithMenu';
import { useI18N, useBilingual } from '../i18n';
import ImageSlider, { hasDepictions } from './ImageSlider';

import 'leaflet/dist/leaflet.css';

import './Profile.scss';

const getBounds = geojson => {
  const corners = bbox(geojson);
  return [ // Leaflet order
    [ corners[1], corners[0] ],
    [ corners[3], corners[2] ]
  ];
}

const PlaceProfile = props => {

  const i18n = useI18N();

  const getTranslation = useBilingual();

  const mapRef = useRef();

  const { item, navigator, store } = props;

  const hasGeom = hasGeometry(item);

  useEffect(() => {
    if (mapRef.current && hasGeom) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(getBounds(item));
    }
  }, [ item, hasGeom ]);

  const actors = getRelatedItems(item, store).actors;

  return (
    <PageWithMenu 
      backButton
      className="profile place"
      title={item.properties.title}
      {...props}>

      <div className="map-container">
        <Map 
          ref={mapRef}
          zoomControl={false}
          attributionControl={false}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          />
          { hasGeom && <GeoJSON data={item} /> }
        </Map>
      </div>

      { item.description && item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value)}</div>
      )}

      { hasDepictions(item) && 
        <ImageSlider depictions={item.depictions} />
      }

      <List
        className="related actors"
        dataSource={actors}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-account" />
            <label>{i18n('People')}</label>
          </ListHeader>
        }
        renderRow={(r, idx) => 
          <ListItem key={idx} className="related residence" onClick={navigateTo(r, navigator)}>
            <span className="title">{r.properties.title}</span>
          </ListItem>
        } />
    </PageWithMenu>
  )

}

export default PlaceProfile;