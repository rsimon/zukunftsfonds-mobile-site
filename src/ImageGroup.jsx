import React, { useState } from 'react';
import Image from 'react-cool-img';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item =>
  getValidDepictions(item.depictions).length > 0;

const ImageGroup = props => {

  const [ selected, setSelected ] = useState(null);

  const depictions = getValidDepictions(props.depictions);

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
    <div key={d.url} className="image-wrapper" onClick={() => setSelected(idx)}>
      <Image 
        src={d.url}
        alt={d.title} 
        style={{ backgroundColor: 'grey' }} />

      <div className="dim-mask" />
    </div>
  );

  return (
    <>
      <div className="image-group">
        { images }
      </div>

      {selected !== null && 
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

export default ImageGroup;