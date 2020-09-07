import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DataStore from './store/DataStore';

// A simple start helper that loads the data and then switches to the app
const Launcher = () => {

  const [ isLoading, setIsLoading ] = useState(true);

  const store = new DataStore();
  store.load().then(() => setIsLoading(false));

  return (
    <>
      { isLoading ? <div>Loading</div> : <App store={store} /> }
    </>
  )

}

ReactDOM.render(
  <Launcher />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
