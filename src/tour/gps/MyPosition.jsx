import React from 'react';
import { CircleMarker, LayerGroup } from 'react-leaflet';

const OUTER_STYLE = {
  radius: 32,
  weight: 1
}

const INNER_STYLE = {
  radius: 7,
  stroke: false,
  fillOpacity: 1
}

const MyPosition = pos => {

  const { latitude, longitude } = pos.data.coords;

  const center = [ latitude, longitude ];

  return (
    <LayerGroup>
      <CircleMarker 
        {...{ ...OUTER_STYLE, center }} />

      <CircleMarker
        {...{ ...INNER_STYLE, center }} />
    </LayerGroup>
  )

}

export default MyPosition;