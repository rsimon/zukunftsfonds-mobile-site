import React from 'react';
import { Navigator } from 'react-onsenui';
import SplashPage from './splash/SplashPage';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.scss';

const App = props => {

  const renderPage = (route, navigator) => {
    const { store } = props;
    return React.createElement(route.component, { ...route.props, navigator, store });
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
