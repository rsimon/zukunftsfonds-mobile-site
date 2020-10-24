import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Lightbox from 'react-image-lightbox';

import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-image-lightbox/style.css';

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item => 
  getValidDepictions(item.depictions).length > 0;

const ImageSlider = props => {

  const [ selected, setSelected ] = useState(null);

  const depictions = getValidDepictions(props.depictions);

  const images = depictions.map((d, idx) =>
    <div className="image-wrapper">
      <div className="inner">
        <img src={d.url} alt={d.title} onClick={() => setSelected(idx)} />
      </div>
    </div>
  )

  return (
    <>
      <div className="image-carousel">
        <AliceCarousel 
          mouseTracking
          disableDotsControls
          disableButtonsControls
          autoWidth
          items={images} />
      </div>

      { selected && 
        <Lightbox 
          mainSrc={depictions[selected].url} />
      }
    </>
  )

}

export default ImageSlider;