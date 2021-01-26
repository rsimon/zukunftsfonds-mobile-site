import React from 'react';
import { Icon } from 'react-onsenui';
import distance from '@turf/distance';

import './InfoPanel.scss';

const InfoPanel = props => {
  
  // turf.js needs GeoJSON feature
  const currentPos = props.pos ? {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [ props.pos.coords.longitude, props.pos.coords.latitude ]
    }
  } : null;

  const dist = currentPos ? Math.round(distance(currentPos, props.waypoint) * 1000) : null;

  return (
    <div className="tour-map-infopanel">
      <div 
        className="waypoint-image"
        style={{ backgroundImage: `url('tours/images/${props.waypoint.properties.images[0]}')` }}>
        <h2>{props.waypoint.properties.title}</h2>
      </div>
      <div className="waypoint-description">
        <p>
          {props.waypoint.properties.description}
        </p>

        <div className="shade-gradient" />
      </div>
      <footer className="tour-map-footer">
        <Icon icon="md-walk" />
        <span className="distance-to-waypoint">
           Distance {dist || '-'}m
        </span>
      </footer>
    </div>
  ) 

}

export default InfoPanel;