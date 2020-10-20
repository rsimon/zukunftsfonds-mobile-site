import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DataStore from './store/DataStore';
import L from 'leaflet';

// Fix missing Leaflet marker images
// Cf. https://github.com/PaulLeCam/react-leaflet/issues/453
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// A simple start helper that loads the data and then switches to the app
const Launcher = () => {

  const [ isLoading, setIsLoading ] = useState(true);

  const store = new DataStore();
  store.load().then(() => setIsLoading(false));

  return (
    <>{ isLoading ? <div>Loading</div> : <App store={store} /> }</>
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
