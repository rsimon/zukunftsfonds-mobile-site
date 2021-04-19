import React, { useState } from 'react';
import { Icon } from 'react-onsenui';
import distance from '@turf/distance';
import { CSSTransition } from 'react-transition-group';
import { useI18N } from '../../i18n';

import './InfoPanel.scss';

const InfoPanel = props => {

  const [ expanded, setExpanded ] = useState(false);

  const i18n = useI18N();
  
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
  
  const proximity = dist < 25 ? 'ARRIVED' : 'FAR';

  const onNextWaypoint = () => {
    setExpanded(false);
    props.onNextWaypoint();
  }

  const onPreviousWaypoint = () => {
    setExpanded(false);
    props.onPreviousWaypoint();
  }

  return (
    <CSSTransition in={expanded} timeout={200}>
      <div className="tour-map-infopanel">
        <div className={`next-stop ${proximity}`}>
          {proximity !== 'ARRIVED' &&
            <h1>{i18n('Next Stop')}</h1> }

          <h2>
            {proximity === 'FAR' &&
              <span className="distance"><Icon icon="md-walk" /> {dist || '-'}m </span> }

            {proximity === 'ARRIVED' &&
              <Icon icon="md-gps-dot" /> }

            {props.waypoint.properties.title}
          </h2>

          <button 
            className="expand"
            onClick={() => setExpanded(!expanded)}>
            <Icon icon="md-chevron-right" /> 
          </button>
        </div>
        <div 
          className="waypoint-image"
          style={{ backgroundImage: `url('tours/images/${props.waypoint.properties.images[0]}')` }}>
          <h2>{props.waypoint.properties.title}</h2>
        </div>
        <div className="waypoint-description">
          <p>
            {props.waypoint.properties.description}
          </p>

          <button 
            className="next-waypoint" 
            onClick={onNextWaypoint}>{i18n('Continue Tour')}</button>

          <button 
            className="prev-waypoint"
            onClick={onPreviousWaypoint}>{i18n('Continue Tour')}</button>

          <div className="shade-gradient" />
        </div>
      </div>
    </CSSTransition>
  ) 

}

export default InfoPanel;