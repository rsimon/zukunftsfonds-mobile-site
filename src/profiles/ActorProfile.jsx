import React, { useEffect, useRef } from 'react';
import { Icon, List, ListHeader, ListItem } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import bbox from '@turf/bbox';
import centroid from '@turf/centroid';
import { hasGeometry, navigateTo } from './Utils';
import { getRelatedItems } from './RelatedItems';
import PageWithMenu from '../PageWithMenu';
import { useI18N, useBilingual } from '../i18n';
import ImageGroup, { hasDepictions } from '../ImageGroup';
import Curve from '../map/Curve';

import './Profile.scss';

const getUnionBounds = geometries => {
  const bboxes = geometries.map(geom => bbox(geom));

  const corners = [
    Math.min.apply(null, bboxes.map(t => t[0])),
    Math.min.apply(null, bboxes.map(t => t[1])),
    Math.max.apply(null, bboxes.map(t => t[2])),
    Math.max.apply(null, bboxes.map(t => t[3]))
  ];

  return [ // Leaflet order
    [ corners[1], corners[0] ],
    [ corners[3], corners[2] ]
  ];
}

const ActorProfile = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  const getTranslation = useBilingual();

  const { item, store, navigator } = props;

  const relatedPlaces = getRelatedItems(item, store).places.all;

  const geometries = relatedPlaces.filter(p => hasGeometry(p));

  const centroids = geometries.map(geom =>
    // GeoJSON - extract just coords, and flip to Leaflet order
    centroid(geom).geometry.coordinates.reverse());

  useEffect(() => {
    const drawArrow = map => {
      const [ start, end ] = centroids;      
      new Curve(start, end, map, map);
    }

    if (mapRef.current && geometries.length > 0) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(getUnionBounds(geometries), { padding: [ 15, 15 ]});

      if (centroids.length === 2)
        drawArrow(map);
    }
  }, [ geometries, centroids ]);

  return (
    <PageWithMenu 
      backButton
      className="profile actor"
      title={item.properties.title}
      {...props}>

      <div className="map-container">
        <Map 
          ref={mapRef}
          zoomControl={false}
          attributionControl={false}
          style={props.isDesktop ? { height:'400px' }: { height:'200px' }}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          />
          {geometries.map(geom => 
            <GeoJSON key={geom['@id']} data={geom} />
          )}
        </Map>
      </div>

      { item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value)}</div>
      )}

      { hasDepictions(item) && 
        <ImageGroup depictions={item.depictions} />
      }

      <List
        className="related places"
        dataSource={relatedPlaces}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-pin" />
            <label>{i18n('Places')}</label>
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

export default ActorProfile;