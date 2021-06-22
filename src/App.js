import React, { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { RecoilRoot } from 'recoil';
import { Navigator } from 'react-onsenui';

import SplashPageMobile from './splash/SplashPageMobile';
import SplashPageDesktop from './splash/SplashPageDesktop';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.scss';

const App = props => {

  const nav = useRef();

  const renderPage = (route, navigator) =>
    React.createElement(route.component, { 
      ...route, 
      navigator, 
      key: props.key || uuid(), // Needs a key per definition and we want to re-render always
      store: props.store,
      isDesktop: props.isDesktop
    });

  // Pushes a state to the window history, so the back button doesn't
  // close the app. It's actually just a dummy push (the state is never
  // read). We'll rewire window.onpopstate instead to pop the navigator.
  const onPostPush = evt => {
    const { name } = evt.routes.pushedRoute.component;
    window.history.pushState({ name }, '');
  }

  useEffect(() => {
    window.onpopstate = () =>
      nav.current && nav.current.popPage();
  }, []);

  const splashPage = props.isDesktop ? SplashPageDesktop : SplashPageMobile;

  return (
    <RecoilRoot>
      <Navigator
        ref={nav}
        renderPage={renderPage}
        initialRoute={{ component: splashPage, key: 'SplashPage' }} 
        onPostPush={onPostPush}
        animation={props.isDesktop ? 'none' : 'slide'}
        swipeable />
    </RecoilRoot>
  );

}

export default App;
