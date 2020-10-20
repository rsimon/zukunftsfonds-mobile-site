import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import PageWithMenu from '../PageWithMenu';

import 'react-alice-carousel/lib/alice-carousel.css';

const SplashPage = props => {

  const images = [
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />
  ];

  return (
    <PageWithMenu 
      title="Die Orthodoxen in Österreich"
      navigator={props.navigator}>

      <div style={{height:'300px', position:'relative' }}>
        <AliceCarousel 
          mouseTracking 
          autoWidth
          autoHeight
          disableDotsControls
          disableButtonsControls
          paddingLeft={3}
          paddingRight={3}
          items={images} />
      </div>
      
    </PageWithMenu>
  )

}

export default SplashPage;