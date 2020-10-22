import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0:    { items: 1 },
  360:  { items: 2 },
  640:  { items: 3 },
  1024: { items: 4 }
};

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item => 
  getValidDepictions(item.depictions).length > 0;

const ImageSlider = props => {

  const depictions = getValidDepictions(props.depictions);

  const images = depictions.map(d =>
    <div className="image-wrapper">
      <img src={d.url} alt={d.title} />
    </div>
  )

  return (
    <div className="image-carousel">
      <AliceCarousel 
        mouseTracking
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        paddingLeft={3}
        paddingRight={3}
        items={images} />
    </div>
  )

}

export default ImageSlider;