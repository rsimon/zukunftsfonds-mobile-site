import React from 'react';
import distance from '@turf/distance';

import './InfoPanel.scss';

const InfoPanel = props => {

  const waypoint = props.tour.waypoints.features[props.waypoint];

  // turf.js needs GeoJSON feature
  const currentPos = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [ props.pos.coords.longitude, props.pos.coords.latitude ]
    }
  };

  const dist = Math.round(distance(currentPos, waypoint) * 1000);

  return (
    <div className="tour-map-infopanel">
      {dist}
    </div>
  ) 

}

export default InfoPanel;