import React, { useEffect, useRef, useState } from 'react';
import { GeoJSON, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Button, Icon } from 'react-onsenui';
import { useI18N, useLang } from '../../i18n';
import { loadTour, loadJourney, getBounds } from '../Tour';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';
import WaypointPage from './WaypointPage';
import L from 'leaflet';

import './StartPage.scss';

const JOURNEY_STYLE = feature => ({
  color: feature.properties.color,
  weight: 5,
  dashArray: '8 8'
});

const POIIcon = feature => {
  const color = feature.properties.color || 'blue';
  const icon = feature.properties.icon || 'flat';

  return L.icon({
    iconUrl: `images/leaflet/marker-${icon}-${color}.png`,
    iconRetinaUrl: `images/leaflet/marker-${icon}-${color}-2x.png`,
    shadowUrl: 'images/leaflet/marker-shadow.png',
    shadowRetinaUrl: 'images/leaflet/marker-shadow-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -43],
    shadowSize: [25, 41],
    shadowAnchor: [12, 41]
  });
}

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

  const journeyPath = journey && {
    type: 'FeatureCollection',
    features: journey.features.filter(f => f.geometry.type !== 'Point')
  }

  const journeyPOIs = journey && journey.features
    .filter(f => f.geometry.type === 'Point')
    .map((f, idx) => 
      <Marker
        key={idx}
        position={f.geometry.coordinates.slice().reverse()}
        icon={POIIcon(f)}>
        <Popup>{f.properties.name}</Popup>
      </Marker>);

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
                <GeoJSON data={journeyPath} style={JOURNEY_STYLE} />
                {journeyPOIs}
              </Map>
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