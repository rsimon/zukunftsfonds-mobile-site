import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { Button, Icon } from 'react-onsenui';
import { useI18N } from '../../i18n';
import { loadTour } from '../Tour';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';
import WaypointPage from './WaypointPage';

import './StartPage.scss';

const PATH_STYLE = {
  color: '#000',
  dashArray: '6 6'
}

const StartPage = props => {

  const i18n = useI18N();

  const mapRef = useRef();

  const [ tour, setTour ] = useState();

  useEffect(() => {
    loadTour('oberhollabrunn', props.store).then(setTour);
  }, []);

  useEffect(() => {
    if (mapRef.current && tour) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(tour.bounds, { padding: [ 15, 15 ]});
    }
  }, [ tour ]);

  const onStartTour = tour => () =>
    props.navigator.pushPage({ 
      component: WaypointPage,
      tour
  });

  return (
    <PageWithMenuDesktop
      className="tour-startpage-desktop"
      title={i18n('Walking Tour')}
      current="Tour"
      {...props}>

      {tour &&
        <>
          <div className="tour-desktop-header">
            <div className="tour-image">
              <img src={tour.image} alt="GPS walk header decoration" />
            </div>

            <div className="tour-overview-map">
              <Map 
                ref={mapRef}
                zoomControl={false}
                attributionControl={false}
                style={{height:'350px'}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <GeoJSON data={tour.track} {...PATH_STYLE} />
              </Map>
              <div className="clicktrap" />
            </div>
          </div>

          <div className="tour-description" dangerouslySetInnerHTML={{
            __html: tour.description
          }} />

          <div className="start-tour">
            <Button onClick={onStartTour(tour)}>
              <Icon icon="md-walk" /> <label>{i18n('Start the tour')}</label>
            </Button>
          </div>
        </>
      }
    </PageWithMenuDesktop>
  )

}

export default StartPage;