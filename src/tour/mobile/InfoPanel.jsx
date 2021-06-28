import React, { useState, useEffect, useRef } from 'react';
import { Button, Icon } from 'react-onsenui';
import distance from '@turf/distance';
import { CSSTransition } from 'react-transition-group';
import { useI18N, useBilingual } from '../../i18n';
import ImageGroup from '../../ImageGroup';

import './InfoPanel.scss';

const InfoPanel = props => {

  const main = useRef();

  const [ expanded, setExpanded ] = useState(false);

  const i18n = useI18N();

  const getTranslation = useBilingual();
  
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
  
  const proximity = props.useGPS ? (dist !== null && dist < 25 ? 'ARRIVED' : 'FAR') : 'NO-GPS';

  useEffect(() => {
    if (main.current)
      main.current.scrollTop = 0;
  }, [ props.waypoint ])

  useEffect(() => {
    // If proximity changes to 'ARRIVED', buzz & expand panel
    if (proximity === 'ARRIVED') {
      window.navigator.vibrate(200);
      setExpanded(true);
    }
  }, [ proximity ])

  const onNextWaypoint = () => {
    if (props.useGPS)
      setExpanded(false);
    
      props.onNextWaypoint();
  }

  const onPreviousWaypoint = () => {
    if (props.useGPS)
      setExpanded(false);
    
      props.onPreviousWaypoint();
  }

  const headerImage = props.waypoint.properties.images[0].url.startsWith('http') ? 
    props.waypoint.properties.images[0].url :
    `tours/images/${props.waypoint.properties.images[0].url}`;

  return (
    <CSSTransition in={expanded} timeout={200}>
      <div className="tour-map-infopanel">
        <div className={`next-stop ${proximity}`}>
          {proximity === 'FAR' &&
            <h1>
              { 
                props.isStart ? i18n('First Stop') : (
                  props.isEnd ? i18n('Last Stop') : i18n('Next Stop')
                )
              }
            </h1>
          }

          {proximity === 'ARRIVED' &&
            <h1>{i18n('You have arrived!')}</h1> }

          {proximity === 'NO-GPS' &&
            <h1>
              { 
                props.isStart ? i18n('First Stop') : (
                  props.isEnd ? i18n('Last Stop') : `${i18n('Stop')} ${props.waypointIdx + 1}`
                )
              }
            </h1>
          }

          <h2>
            {proximity === 'FAR' &&
              <span className="distance"><Icon icon="md-walk" /> {dist || '-'}m </span> }

            {props.waypoint.properties.title}
          </h2>

          <button 
            className="expand"
            onClick={() => setExpanded(!expanded)}>
            <Icon icon="md-chevron-right" /> 
          </button>
        </div>
        
        <main ref={main}>
          <div 
            className="waypoint-image"
            style={{ backgroundImage: `url('${headerImage}')` }}>
          </div>
          <div className="waypoint-description">
            <p>
              {getTranslation(props.waypoint.properties.description).replace('\n', '\n\n')}
            </p>

            <ImageGroup depictions={props.waypoint.properties.images} />

            <div className="buttons">
              {props.isEnd ?
                <>
                  <p><strong>{i18n('You have reached the end of our tour.')}</strong></p>
                  <Button
                    className="go-back" 
                    onClick={props.onReturn}>
                    {i18n('Back')}
                  </Button>
                </> :

                <Button 
                  className="next-waypoint" 
                  onClick={onNextWaypoint}>

                  <Icon icon="md-walk" /> {i18n('Continue to Next Stop')}
                </Button>
              }

              {!props.isStart &&
                <button 
                  className="prev-waypoint"
                  onClick={onPreviousWaypoint}>{i18n('Back to previous stop')}</button>
              }
            </div>

            <div className="shade-gradient" />
          </div>
        </main>
      </div>
    </CSSTransition>
  ) 

}

export default InfoPanel;