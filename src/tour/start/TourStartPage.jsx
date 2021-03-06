import React, { useState, useEffect, useRef } from 'react';
import PageWithMenu from '../../PageWithMenu';
import { Button, Icon } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { useI18N } from '../../i18n';
import { loadTour } from '../Tour';
import GPSModePage from '../gps/GPSModePage';

import './TourStartPage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const TourStartPage = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  const [ tour, setTour ] = useState();

  useEffect(() => {
    loadTour('simulated').then(setTour);
  }, []);

  useEffect(() => {
    if (mapRef.current && tour) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(tour.bounds, { padding: [ 15, 15 ]});
    }
  }, [ tour ]);

  const onStartGPSTour = tour => () =>
    props.navigator.pushPage({ 
      component: GPSModePage,
      tour
    });

  return (
    <PageWithMenu 
      backButton
      className="tour-startpage"
      title={i18n('GPS Walking Tours')}
      navigator={props.navigator}>

      { tour &&
        <>
          <div className="tour-start-header-image">
            <img src="tours/images/waypoint-4.jpg" alt="GPS walk header decoration" />
            <div className="caption">
              <h1>{tour.title}</h1>
              <h3 className="duration">
                <Icon icon="md-time" /> ca. {tour.duration} {i18n('Minutes')}
              </h3>
            </div>
          </div>

          <div className="tour-description">
            {tour.description}
          </div>

          <div className="tour-overview-map">
            <Map 
              ref={mapRef}
              zoomControl={false}
              attributionControl={false}
              style={{height:'200px'}}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON data={tour.track} {...PATH_STYLE} />
            </Map>
            
            <div className="clicktrap" />
          </div>

          <div className="start-buttons">
            <Button onClick={onStartGPSTour(tour)}>
              <Icon icon="md-gps-dot" /> <label>{i18n('Start the tour')}</label>
            </Button>

            <Button modifier="outline" className="outline">
              <Icon icon="md-gps-off" /> <label>{i18n('View tour without GPS')}</label>
            </Button>
          </div>
        </>
      }
    </PageWithMenu>
  )

}

export default TourStartPage;