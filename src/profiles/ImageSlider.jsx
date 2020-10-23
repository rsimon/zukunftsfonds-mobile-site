import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item => 
  getValidDepictions(item.depictions).length > 0;

const ImageSlider = props => {

  const depictions = getValidDepictions(props.depictions);

  const images = depictions.map(d =>
    <div className="image-wrapper">
      <div className="inner">
        <img src={d.url} alt={d.title} />
      </div>
    </div>
  )

  return (
    <div className="image-carousel">
      <AliceCarousel 
        mouseTracking
        disableDotsControls
        disableButtonsControls
        autoWidth
        items={images} />
    </div>
  )

}

export default ImageSlider;