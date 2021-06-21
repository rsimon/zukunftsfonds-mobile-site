import React from 'react';
import { Button } from 'react-onsenui';
import { useI18N, useBilingual } from '../i18n';
import { SPLASH_MESSAGE } from './SplashPageMobile';
import PageWithMenuDesktop from '../PageWithMenuDesktop';
import SerbsInVienna from '../projects/SerbsInVienna';
import CampOberhollabrunn from '../projects/CampOberhollabrunn';

const SplashPageDesktop = props => {

  const i18n = useI18N();

  const getTranslation = useBilingual();

  const goTo = component => () =>
    props.navigator.pushPage({ component });

  return (
    <PageWithMenuDesktop 
      className="splashpage"
      current="SplashPage"
      navigator={props.navigator}>
      
      <div className="splash-page-container">
        <div className="splash-image-container">
          <img className="splash-image" src="images/OrthodoxyInEurope.png" alt="Orthodoxy in Europe - Map" />

          <div className="splash-message">
            <h1>
              {i18n('Digital Geoportal of the History of the Orthodox in Austria')}
            </h1>
            <p>
              {getTranslation(SPLASH_MESSAGE)}
            </p>
          </div>
        </div>

        <div className="content">
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
    </PageWithMenuDesktop>
  )

}

export default SplashPageDesktop;