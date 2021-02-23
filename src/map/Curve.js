import L from 'leaflet';

import '@elfalem/leaflet-curve';

const canvasRenderer = L.canvas();

/**
 * Modified from https://gist.github.com/ryancatalani/6091e50bf756088bf9bf5de2017b32e6
 */

export default class Curve {

  constructor(fromLatLon, toLatLon, opts) {
    const pathOptions = opts || {
      color: '#a98f54',
      weight: 3
    };

    const offsetX = toLatLon[1] - fromLatLon[1];
    const offsetY = toLatLon[0] - fromLatLon[0];

    const r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
    const theta = Math.atan2(offsetY, offsetX);

    const thetaOffset = - (Math.PI / 10);

    const r2 = (r / 2) / Math.cos(thetaOffset);
    const theta2 = theta + thetaOffset;

    const midpointX = (r2 * Math.cos(theta2)) + fromLatLon[1];
    const midpointY = (r2 * Math.sin(theta2)) + fromLatLon[0];

    const midpointLatLng = [ midpointY, midpointX ];

    const data = [
      'M', fromLatLon,
      'Q', midpointLatLng,
      toLatLon
    ];

    this.curve = L.curve(data, { ...pathOptions, className: 'curve-inner', renderer: canvasRenderer });

    /* A wider, transparent copy of the path to catch tap events
    this.clickBuffer = L.curve(data, {
      color: 'transparent',
      weight: 20
    });

    const handleStyle = {
      stroke: false,
      fillColor: pathOptions.handleColor || '#8a6100',
      fillOpacity: 1,
      radius: 5
    }

    this.handles = [
      L.circleMarker(fromLatLon, handleStyle),
      L.circleMarker(toLatLon, handleStyle)
    ];
    */
  }

  addTo = map => {
    this.curve.addTo(map);
    // this.handles.map(h => h.addTo(map));
    // this.clickBuffer.addTo(map);
    return this;
  }

  onClick = handler => {
    // this.clickBuffer.addEventListener('click', handler);
    this.curve.addEventListener('click', handler);
  }
  
}