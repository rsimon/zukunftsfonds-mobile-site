import React from 'react';
import { Navigator } from 'react-onsenui';
import SplashPage from './splash/SplashPage';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

function App() {

  const renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props);
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
