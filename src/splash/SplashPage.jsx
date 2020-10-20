import React, { useState } from 'react';
import { Icon, Page, Splitter, SplitterContent, SplitterSide, Toolbar, ToolbarButton } from 'react-onsenui';
import AliceCarousel from 'react-alice-carousel';
import SearchPage from '../search/SearchPage';
import SideMenu from '../SideMenu';

import 'react-alice-carousel/lib/alice-carousel.css';

const SplashPage = props => {

  const [ isMenuOpen, setMenuOpen ] = useState(false);
  
  const images = [
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Hollabrunn.jpg" />
  ];

  return (
    <Page>
      <Splitter>
        <SplitterContent>
          <Page 
            renderToolbar={() => 
              <Toolbar>
                <div className="center">
                  Die Orthodoxen in Österreich
                </div>
                <div className="right">
                  <ToolbarButton onClick={() => setMenuOpen(true)}>
                    <Icon icon="md-menu" />
                  </ToolbarButton>
                </div>
              </Toolbar>
            }>

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
          </Page>
        </SplitterContent>
        <SplitterSide
          animation="overlay"
          mode="collapse"
          side="right"
          collapse={true}
          width="300px"
          isOpen={isMenuOpen}
          onClose={() => setMenuOpen(false)}>

          <SideMenu navigator={props.navigator} />

        </SplitterSide>
      </Splitter>
    </Page>
  )

}

export default SplashPage;