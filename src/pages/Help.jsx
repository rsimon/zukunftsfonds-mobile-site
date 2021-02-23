import React from 'react';
import PageWithMenu from '../PageWithMenu';
import { useLang } from '../i18n';

import './Help.scss';

const de = 
  <>
    <p>
      Sie können die Datenbank entweder mit Hilfe 
      der <span>Suchfunktion</span> oder der <span>Überblickskarte</span> durchsuchen.
    </p>

    <p>
      Tippen sie das Zurück-Icon oder die Rücktaste ihres 
      Gerätes um zur vorherigen Seite zu zurückzukehren. 
    </p>

    <p>
      Benutzen sie das Hauptmenü um zur Startseite, zur Suche,
      oder zu den Projektinformations-Seiten zu navigieren, oder
      um die Spracheinstellung zwischen Englisch und Deutsch 
      umzuschalten.
    </p>

    <h1>App-Information</h1>
    <p>
      Diese Anwendung nutzt u.A. die folgenden Open Source Softwarebibliotheken und Datenquellen: 
    </p>
    <ul>
      <li><a href="https://leafletjs.com/" target="_blank" rel="noreferrer">Leaflet</a></li>
      <li><a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">OpenStreetMap</a></li>
    </ul>
  </>

const en = 
  <>
    <p>
      You can explore the database either through 
      the <span>Search</span> function, or the <span>Overview Map</span>.
    </p>

    <p>
      Tap the Back icon or your device back button to return to
      the previous page. 
    </p>

    <p>
      Use the main menu to go back to the start page, to the search,
      or the project information pages, or to toggle the language 
      setting between English and German.
    </p>

    <h1>App Information</h1>
    <p>
      This application makes use of the following open source software libraries and 
      data sources:
    </p>
    <ul>
      <li><a href="https://leafletjs.com/" target="_blank" rel="noreferrer">Leaflet</a></li>
      <li>
        Map data from <a href="https://developers.arcgis.com/" target="_blank" rel="noreferrer">ESRI ArcGIS online</a>. 
        Source: Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community.
      </li>
    </ul>
  </>

const TITLE = {
  'de': 'Hilfe',
  'en': 'Help'
}

const CONTENT = { de, en }

const Help = props => {

  const lang = useLang();

  return(
    <PageWithMenu
      className="app-help"
      title={TITLE[lang]}
      navigator={props.navigator}
      backButton>
      <div className="page-container">
          {CONTENT[lang]}
      </div>
    </PageWithMenu>
  )
}

export default Help;