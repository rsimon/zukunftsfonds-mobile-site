import React from 'react';
import { CircleMarker, GeoJSON, LayerGroup, Pane } from 'react-leaflet';

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

  const { viewpoint } = props.waypoint.properties;

  return (
    <>
      <Pane style={{ zIndex: 99999 }}>
        <LayerGroup>
          <CircleMarker 
            {...{ ...OUTER_STYLE, center: viewpoint }} />

          <CircleMarker
            {...{ ...INNER_STYLE, center: viewpoint }} />
        </LayerGroup>
      </Pane>

      <Pane style={{ zIndex: 99998 }}>
        <GeoJSON key={JSON.stringify(props.waypoint.geometry.coordinates)} data={props.waypoint} />
      </Pane>
    </>
  )

}

export default NextStop;