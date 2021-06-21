import React from 'react';
import { Button, Icon } from 'react-onsenui';
import PageWithMenu from '../PageWithMenu';
import { useI18N, useBilingual } from '../i18n';
import OverviewMap from '../map/OverviewMap';
import SearchPageMobile from '../search/SearchPageMobile';
import SerbsInVienna from '../projects/SerbsInVienna';
import CampOberhollabrunn from '../projects/CampOberhollabrunn';

import './SplashPage.scss';

export const SPLASH_MESSAGE = 
  `Das "Digitale Geoportal der Geschichte der Orthodoxen in Österreich" hat das Ziel, die Geschichte,
   den Glauben und die Kultur der orthodoxen Kirchen und von deren Gläubigen in Europa, mit einem Schwerpunkt 
   auf Österreich, mit Hilfe von wissenschaftlichen Projekten zu erforschen und einer breiten Öffentlichkeit 
   zugänglich zu machen. ------------ The "Digital Geoportal of the History of the Orthodox in Austria" has the 
   aim to research the history, faith and culture of the Orthodox churches and their believers in Europe, with 
   a special emphasis on Austria, based on scholarly projects and to popularise all of the aforesaid aspects in 
   the general public.`

const SplashPage = props => {

  const i18n = useI18N();

  const getTranslation = useBilingual();

  const goTo = component => () =>
    props.navigator.pushPage({ component });
  
  return (
    <PageWithMenu 
      className="splashpage"
      title={i18n('Orthodox Europe')}
      navigator={props.navigator}>

      <div className="splash-page-container">
        <div className="splash-image-container">
          <img className="splash-image" src="images/OrthodoxyInEurope.png" alt="Orthodoxy in Europe - Map" />
        </div>

        <div className="buttons">
          <Button onClick={goTo(OverviewMap)}>
            <Icon icon="md-globe" />
            <label>{i18n('Map')}</label>
          </Button>
          <Button onClick={goTo(SearchPageMobile)}>
            <Icon icon="md-search" />
            <label>{i18n('Search')}</label>
          </Button>
        </div>

        <div className="splash-message">
          <h1>
            {i18n('Digital Geoportal of the History of the Orthodox in Austria')}
          </h1>
          <p>
            {getTranslation(SPLASH_MESSAGE)}
          </p>
        </div>

        <div className="projects">
          <h2>{i18n('Projects')}</h2>
          <ol>
            <li>
              <Button modifier="large--quiet" onClick={goTo(SerbsInVienna)}>
                {i18n('Serbs in Vienna 1741-1918')}
              </Button>
            </li>
            
            <li>
              <Button modifier="large--quiet" onClick={goTo(CampOberhollabrunn)}>
                {i18n('Orthodox Refugees in Hollabrunn 1914-1918')}
              </Button>
            </li>
          </ol>
        </div>

        <footer>
          <strong>{i18n('Imprint')}</strong><br/>
          Digitales Geoportal der Geschichte der Orthodoxen in Österreich<br/>
          Vertreten durch:<br/>
          Priv.-Doz. Mag. Dr. Mihailo Popović, Projektleiter<br/>
          Kiningergasse 12/2/7<br/>
          1120 Wien<br/>
          Österreich<br/>
          <a href="mailto:mihailop@hotmail.com">mihailop@hotmail.com</a>
        </footer>
      </div>
    </PageWithMenu>
  )

}

export default SplashPage;