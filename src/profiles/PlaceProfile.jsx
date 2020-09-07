import React from 'react';
import { BackButton, Page, Toolbar } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const PlaceProfile = props => {

  const { item } = props;

  // TODO get centroid instead!
  const center = item?.geometry?.coordinates[0][0].slice().reverse();
  console.log(center);

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
          center={center} 
          zoom={13}
          zoomControl={false}
          style={{height:'200px'}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={item} />
        </Map>
      </div>
    </Page>
  )

}

export default PlaceProfile;