import React, { useState, useEffect, useRef } from 'react';
import { Button, Icon } from 'react-onsenui';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { useI18N , useLang } from '../../i18n';
import { loadTour, loadJourney, getBounds } from '../Tour';
import PageWithMenuMobile from '../../PageWithMenuMobile';
import WaypointPage from '../mobile/WaypointPage';

import './StartPage.scss';

const JOURNEY_STYLE = feature => ({
  color: feature.properties.color,
  weight: 4,
  dashArray: '2 6'
});

const TourStartPage = props => {

  const i18n = useI18N();

  const lang = useLang();

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

  const onStartTour = (tour, useGPS) => () =>
    props.navigator.pushPage({ 
      component: WaypointPage,
      tour,
      useGPS
    });

  return (
    <PageWithMenuMobile
      backButton
      className="tour-startpage"
      title={i18n('GPS Walking Tours')}
      {...props}>

      { tour && journey && 
        <>
          <div className="tour-start-header-image">
            <img src={tour.image} alt="GPS walk header decoration" />
            <div className="caption">
              <h1>{tour.title}</h1>
              <h3 className="duration">
                <Icon icon="md-time" /> ca. {tour.duration} {i18n('Minutes')}
              </h3>
            </div>
          </div>

          <div className="tour-description" dangerouslySetInnerHTML={{
            __html: tour.getDescription(lang)
          }} />

          <div className="tour-overview-map">
            <Map 
              ref={mapRef}
              zoomControl={false}
              attributionControl={false}
              style={{height:'200px'}}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON data={journey} style={JOURNEY_STYLE} />
            </Map>
            
            <div className="clicktrap" />
          </div>

          <div className="start-buttons">
            <Button onClick={onStartTour(tour, true)}>
              <Icon icon="md-gps-dot" /> <label>{i18n('Start the tour')}</label>
            </Button>

            <Button onClick={onStartTour(tour, false)} modifier="outline" className="outline">
              <Icon icon="md-gps-off" /> <label>{i18n('View tour without GPS')}</label>
            </Button>
          </div>
        </>
      }
    </PageWithMenuMobile>
  )

}

export default TourStartPage;