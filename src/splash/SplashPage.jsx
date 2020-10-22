import React from 'react';
import PageWithMenu from '../PageWithMenu';
import { useI18N, useBilingual } from '../i18n';

import './SplashPage.scss';

const SPLASH_MESSAGE = 
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
  
  return (
    <PageWithMenu 
      title={i18n('Orthodox Europe')}
      navigator={props.navigator}>

      <div className="splash-page-container">
        <div className="splash-image-container">
          <img className="splash-image" src="images/OrthodoxyInEurope.png" alt="Orthodoxy in Europe - Map" />
        </div>

        <div className="splash-message">
          <h1>
            {i18n('Digital Geoportal of the History of the Orthodox in Austria')}
          </h1>
          <p>
            {getTranslation(SPLASH_MESSAGE)}
          </p>
        </div>
      </div>
    </PageWithMenu>
  )

}

export default SplashPage;