import React, { useEffect, useRef, useState } from 'react';
import { Button, Icon } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import NextStop from '../map/NextStop';
import { useI18N, useBilingual } from '../../i18n';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';
import ImageGroup from '../../ImageGroup';

import './WaypointPage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const WaypointPage = props => {

  const [ waypoint, setWaypoint ] = useState(props.tour.waypoints.features[0]);
  
  const i18n = useI18N();

  const mapRef = useRef();

  const getTranslation = useBilingual();

  useEffect(() => {
    if (mapRef.current && props.tour) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(props.tour.bounds, { padding: [ 15, 15 ]});
    }
  }, [ props.tour ]);

  const currentIdx = props.tour.waypoints.features.indexOf(waypoint);
  const isStart = currentIdx === 0;
  const isEnd = currentIdx === props.tour.waypoints.features.length - 1;

  const onNextWaypoint = () => {
    const nextIdx = Math.min(currentIdx + 1, props.tour.waypoints.features.length - 1);
    setWaypoint(props.tour.waypoints.features[nextIdx]);
  }

  const onPrevWaypoint = () => {
    const prevIdx = Math.max(0, currentIdx - 1);
    setWaypoint(props.tour.waypoints.features[prevIdx]);
  }

  return (
    <PageWithMenuDesktop
      className="tour-desktop"
      title={i18n('Walking Tour')}
      {...props}>

      <div className="map-container">
        <Map 
          ref={mapRef}
          zoomControl={false}
          attributionControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON { ...{...PATH_STYLE, data: props.tour.track }} /> 
          <NextStop waypoint={waypoint} />
        </Map>

        <div className="buttons map">
          {!isStart &&
            <span>
              <Button className="prev-stop" onClick={onPrevWaypoint}>
                <Icon icon="md-chevron-left" />
              </Button>
            </span>
          }

          {!isEnd &&
            <span>          
              <Button className="next-stop" onClick={onNextWaypoint}>
                <Icon icon="md-chevron-right" />
              </Button>
            </span>
          }
        </div>
      </div>

      <div className="waypoint-description">
        <h1>
          { 
            isStart ? i18n('First Stop') : (
              isEnd ? i18n('Last Stop') : `${i18n('Stop')} ${currentIdx + 1}`
            )
          }
        </h1>

        <h2>{waypoint.properties.title}</h2>

        <p>
          {getTranslation(waypoint.properties.description).replace('\n', '\n\n')}
        </p>

        <ImageGroup depictions={waypoint.properties.images} />

        <div className="buttons">
          {isEnd ?
            <>
              <p><strong>{i18n('You have reached the end of our tour.')}</strong></p>
            </> :

            <Button 
              className="next-waypoint" 
              onClick={onNextWaypoint}>

              <Icon icon="md-walk" /> {i18n('Continue to Next Stop')}
            </Button>
          }

          {!isStart &&
            <button 
              className="prev-waypoint"
              onClick={onPrevWaypoint}>{i18n('Back to previous stop')}</button>
          }
        </div>
      </div>

    </PageWithMenuDesktop>
  )

}

export default WaypointPage;