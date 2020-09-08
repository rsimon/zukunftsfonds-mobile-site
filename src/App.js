import React from 'react';
import { Navigator } from 'react-onsenui';
import SplashPage from './splash/SplashPage';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.scss';

const App = props => {

  // TODO looks like this renders multiple times!

  const renderPage = (route, navigator) => {
    const { store } = props;

    // TODO needs a (sensible) key property
    return React.createElement(route.component, { ...route, navigator, store });
  }

  return (
    <Navigator
      renderPage={renderPage}
      initialRoute={{ component: SplashPage }} 
      animation="slide"
      swipeable />
  );

}

export default App;
