import React, { useEffect, useState } from 'react';
import Image from 'react-cool-img';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

const getValidDepictions = depictions => depictions ? 
  depictions.filter(d => d.url.indexOf('http') === 0) : [];

export const hasDepictions = item =>
  getValidDepictions(item.depictions).length > 0;

const ImageGroup = props => {

  const depictions = getValidDepictions(props.depictions);

  const [ selected, setSelected ] = useState(props.open ? 0 : null);

  useEffect(() => {
    if (props.open)
      setSelected(0);
    else 
      setSelected(null);
  }, [ props.open ]);

  const getPrev = idx => {
    if (selected !== null && depictions.length > 1) {
      const prevIdx = (depictions.length + selected - 1) % depictions.length;
      return depictions[prevIdx].url + '?image_size=webview';
    }
  }

  const getNext = idx => {
    if (selected !== null && depictions.length > 1) {
      const nextIdx = (selected + 1) % depictions.length;
      return depictions[nextIdx].url + '?image_size=webview';
    }
  }

  let images = depictions.map((d, idx) =>
    <div key={d.url} className="image-wrapper" onClick={() => setSelected(idx)}>
      <Image 
        src={`${d.url}?image_size=thumbnail`}
        alt={d.title} 
        placeholder="images/wait.svg"
        style={{ backgroundColor: '#dfdfdf' }} />

      <div className="dim-mask" />
    </div>
  );

  if (props.hideFirst) 
    images = [...images.slice(1) ];


  const onClose = () => {
    setSelected(null);
    props.onClose();
  }

  return (
    <>
      <div className="image-group">
        { images }
      </div>

      {selected !== null && 
        <Lightbox 
          mainSrc={`${depictions[selected].url}?image_size=webview`} 
          prevSrc={getPrev()}
          nextSrc={getNext()}
          imageCaption={depictions[selected].title}
          onMovePrevRequest={() => setSelected((depictions.length + selected - 1) % depictions.length)}
          onMoveNextRequest={() => setSelected((selected + 1) % depictions.length)}
          onCloseRequest={onClose} />
      }
    </>
  )

}

export default ImageGroup;