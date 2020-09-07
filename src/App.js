import React from 'react';
import { Navigator } from 'react-onsenui';
import SplashPage from './splash/SplashPage';
import PlaceProfile from './profiles/PlaceProfile';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.scss';

const App = props => {

  console.log('render');

  const renderPage = (route, navigator) => {
    const { store } = props;
    return React.createElement(route.component, { ...route, navigator, store });
  }

  // Just for hacking
  const oberhollabrunn = props.store.items; // findById('https://openatlas.orthodoxes-europa.at/entity/6000');
  console.log(oberhollabrunn);

  return (
    <Navigator
      renderPage={renderPage}
      initialRoute={{ component: SplashPage }} 
      animation="slide"
      swipeable />
  );

}

export default App;
