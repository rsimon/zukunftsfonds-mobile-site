import React from 'react';
import { useLang } from '../i18n';

const SearchInstructions = props => {

  const lang = useLang();

  return (
    <div className="instructions">
      {lang === 'en' ?
        'Please enter the name of a person or place.' :
        'Bitte geben Sie den Namen einer Person oder eines Ortes ein.'
      }
    </div>
  )

}

export default SearchInstructions;