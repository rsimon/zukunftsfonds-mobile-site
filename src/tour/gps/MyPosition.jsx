import React from 'react';
import { CircleMarker, LayerGroup } from 'react-leaflet';

const OUTER_STYLE = {
  radius: 32,
  weight: 1,
  color: '#739cff',
  fillColor: '#004aff',
  fillOpacity: 0.3
}

const INNER_STYLE = {
  radius: 5,
  stroke: false,
  fillOpacity: 1,
  fillColor: '#004aff'
}

const MyPosition = props => {

  const { latitude, longitude } = props.pos.coords;

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