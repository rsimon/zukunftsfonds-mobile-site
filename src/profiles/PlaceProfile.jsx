import React, { useEffect, useRef } from 'react';
import { Icon, List, ListHeader, ListItem } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import bbox from '@turf/bbox';
import { useRecoilValue } from 'recoil';
import { languageState } from '../store/State';
import { getActors, getTranslation, navigateTo } from './Utils';
import PageWithMenu from '../PageWithMenu';
import i18n from '../i18n';

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

  const language = useRecoilValue(languageState);

  const mapRef = useRef();

  const { item, navigator, store } = props;

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(getBounds(item));
    }
  }, [ item ]);

  const actors = getActors(item, store);

  return (
    <PageWithMenu 
      backButton
      className="profile place"
      title={item.properties.title}
      navigator={props.navigator}>

      <div className="map-container">
        <Map 
          ref={mapRef}
          zoomControl={false}
          style={{height:'200px'}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={item} />
        </Map>
      </div>
      {item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value, language)}</div>
      )}

      <List
        className="related actors"
        dataSource={actors}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-account" />
            <label>{i18n.t('People', language)}</label>
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