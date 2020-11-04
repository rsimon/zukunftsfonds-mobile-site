import React from 'react';
import { Page, ProgressCircular } from 'react-onsenui';

import './LoadingScreen.scss';

const LoadingScreen = props => {

  return(
    <div className="loading-screen">
      <div className="loading-wrapper">
        <label>Loading</label>
        <div>
          <ProgressCircular indeterminate />
        </div>
      </div>
    </div>
  )

}

export default LoadingScreen;