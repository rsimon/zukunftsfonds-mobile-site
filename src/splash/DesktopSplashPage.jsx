import React from 'react';
import { Button } from 'react-onsenui';
import { useI18N, useBilingual } from '../i18n';
import { SPLASH_MESSAGE } from './SplashPage';
import DesktopPageWithMenu from '../DesktopPageWithMenu';
import SerbsInVienna from '../pages/projects/SerbsInVienna';
import CampOberhollabrunn from '../pages/projects/CampOberhollabrunn';

const DesktopSplashPage = props => {

  const i18n = useI18N();

  const getTranslation = useBilingual();

  const goTo = component => () =>
    props.navigator.pushPage({ component });

  return (
    <DesktopPageWithMenu 
      className="splashpage"
      navigator={props.navigator}>
      
      <div className="splash-page-container">
        <div className="splash-image-container">
          <img className="splash-image" src="images/OrthodoxyInEurope.png" alt="Orthodoxy in Europe - Map" />
        </div>

        <div className="content">
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
        </div>
      </div>

    </DesktopPageWithMenu>
  )

}

export default DesktopSplashPage;