import React from 'react';

const ImageSlider = props => {

  const firstUrl = props.depictions[0].url;

  // TODO
  return (
    <img src={firstUrl} />
  )

}

export default ImageSlider;