import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Lightbox from 'react-image-lightbox';

import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-image-lightbox/style.css';

const preload = url => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve();
  img.onerror = error => reject({ error, url });
  img.src = url;
})

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item =>
  getValidDepictions(item.depictions).length > 0;

const ImageSlider = props => {

  const [ selected, setSelected ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadingError, setLoadingError ] = useState(null);

  const depictions = getValidDepictions(props.depictions);

  useEffect(() => {
    Promise.all(depictions.map(d => preload(d.url))).then(result =>
      setIsLoading(false)
    ).catch(error => {
      console.error('Error loading image(s)');
      console.error(error);
      setIsLoading(false);
      setLoadingError(error)
    });  
  }, []);

  const getPrev = idx => {
    if (selected !== null && depictions.length > 1) {
      const prevIdx = (depictions.length + selected - 1) % depictions.length;
      return depictions[prevIdx].url
    }
  }

  const getNext = idx => {
    if (selected !== null && depictions.length > 1) {
      const nextIdx = (selected + 1) % depictions.length;
      return depictions[nextIdx].url;
    }
  }

  const images = depictions.map((d, idx) =>
    <div className="image-wrapper">
      <div className="inner">
        <img src={d.url} alt={d.title} onClick={() => setSelected(idx)} />
      </div>
    </div>
  )

  return (
    <>
      { !isLoading && !loadingError && 
        <div className="image-carousel">
          <AliceCarousel 
            mouseTracking
            disableDotsControls
            disableButtonsControls
            autoWidth
            items={images} />
        </div>
      }

      { loadingError && 
        <div className="image-loading-failed">
          Error loading images {loadingError.url}
        </div>
      }

      { selected !== null && 
        <Lightbox 
          mainSrc={depictions[selected].url} 
          prevSrc={getPrev()}
          nextSrc={getNext()}
          onMovePrevRequest={() => setSelected((depictions.length + selected - 1) % depictions.length)}
          onMoveNextRequest={() => setSelected((selected + 1) % depictions.length)}
          onCloseRequest={() => setSelected(null) } />
      }
    </>
  )

}

export default ImageSlider;