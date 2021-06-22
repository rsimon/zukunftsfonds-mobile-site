import React from 'react';
import { CircleMarker, LayerGroup } from 'react-leaflet';

const OUTER_STYLE = {
  radius: 12,
  weight: 2,
  color: '#000',
  fillColor: '#fff',
  fillOpacity: 1
}

const INNER_STYLE = {
  radius: 4,
  stroke: false,
  fillOpacity: 1,
  fillColor: '#000'
}

const NextStop = props => {

  const [ longitude, latitude ] = props.waypoint.geometry.coordinates;

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

export default NextStop;