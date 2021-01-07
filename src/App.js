import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { Navigator } from 'react-onsenui';
import SplashPage from './splash/SplashPage';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { v4 as uuid } from 'uuid';

import './App.scss';

const App = props => {

  const renderPage = (route, navigator) =>
    React.createElement(route.component, { 
      ...route, 
      navigator, 
      key: props.key || uuid(), // Needs a key per definition and we want to re-render always
      store: props.store
    });

  const onPostPush = evt => {
    window.history.pushState({}, '');
    alert('pushed');
  }

  useEffect(() => {
    window.onpopstate = evt => {
      alert('popped');
    }
  });

  return (
    <RecoilRoot>
      <Navigator
        renderPage={renderPage}
        initialRoute={{ component: SplashPage, key: 'SplashPage' }} 
        onPostPush={onPostPush}
        animation="slide"
        swipeable />
    </RecoilRoot>
  );

}

export default App;
