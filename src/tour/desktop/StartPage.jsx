import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { Button, Icon } from 'react-onsenui';
import { useI18N, useLang } from '../../i18n';
import { loadTour, loadJourney, getBounds } from '../Tour';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';
import WaypointPage from './WaypointPage';

import './StartPage.scss';

const JOURNEY_STYLE = feature => ({
  color: feature.properties.color,
  weight: 5,
  dashArray: '8 8'
});

const StartPage = props => {

  const i18n = useI18N();

  const language = useLang();

  const mapRef = useRef();

  const [ tour, setTour ] = useState();

  const [ journey, setJourney ] = useState();

  useEffect(() => {
    if (mapRef.current && journey) {
      const map = mapRef.current.leafletElement;
      map.fitBounds(getBounds(journey), { padding: [ 15, 15 ]});
    }
  }, [ journey ]);

  useEffect(() => {
    loadTour('oberhollabrunn', props.store).then(setTour);
    loadJourney('oberhollabrunn').then(setJourney);
  }, []);

  const onStartTour = tour => () =>
    props.navigator.pushPage({ component: WaypointPage, tour });

  return (
    <PageWithMenuDesktop
      className="tour-startpage-desktop"
      title={i18n('Walking Tour')}
      current="Tour"
      {...props}>

      {tour && journey &&
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
                <GeoJSON data={journey} style={JOURNEY_STYLE} />
              </Map>
              <div className="clicktrap" />
            </div>
          </div>

          <div className="tour-description" dangerouslySetInnerHTML={{
            __html: tour.getDescription(language)
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