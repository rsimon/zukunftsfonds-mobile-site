import React from 'react';
import PageWithMenu from '../PageWithMenu';
import { useLang } from '../i18n';

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