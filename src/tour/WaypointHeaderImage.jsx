import React from 'react';

const WaypointHeaderImage = props => {

  return (
    <div className="waypoint-header-image">
      <img src={props.src} alt={props.description} />
      <div className="image-title">
        <label>{props.title}</label>
      </div>
    </div>
  )

}

export default WaypointHeaderImage;