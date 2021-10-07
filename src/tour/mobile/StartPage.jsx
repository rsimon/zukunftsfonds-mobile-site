import React, { useState, useEffect, useRef } from 'react';
import { Button, Icon } from 'react-onsenui';
import { GeoJSON, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { useI18N , useLang } from '../../i18n';
import { loadTour, loadJourney, getBounds } from '../Tour';
import PageWithMenuMobile from '../../PageWithMenuMobile';
import WaypointPage from '../mobile/WaypointPage';
import L from 'leaflet';

import './StartPage.scss';

const JOURNEY_STYLE = feature => ({
  color: feature.properties.color,
  weight: 4,
  dashArray: '2 6'
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
              <GeoJSON data={journeyPath} style={JOURNEY_STYLE} />
              {journeyPOIs}
            </Map>
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