import React, { useEffect, useRef } from 'react';
import { BackButton, Page, Toolbar } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import bbox from '@turf/bbox';

import 'leaflet/dist/leaflet.css';

const getBounds = geojson => {
  const corners = bbox(geojson);
  return [ // Leaflet order
    [ corners[1], corners[0] ],
    [ corners[3], corners[2] ]
  ];
}

const PlaceProfile = props => {

  const mapRef = useRef();

  const { item } = props;

  console.log(item['@id']);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(getBounds(item));
    }
  }, [ item ]);

  return (
    <Page 
      className="profile place"
      renderToolbar={() => 
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">
            { item.properties.title }
          </div>
        </Toolbar>
      }>

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
      { item.description.map((d, idx) => 
        <div key={idx} className="description">{d.value}</div>
      )}
    </Page>
  )

}

export default PlaceProfile;