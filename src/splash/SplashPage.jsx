import React, { useState } from 'react';
import { Icon, Page, Splitter, SplitterContent, SplitterSide, Toolbar, ToolbarButton } from 'react-onsenui';
import SearchPage from '../search/SearchPage';
import SideMenu from '../SideMenu';

const SplashPage = props => {

  const [ isMenuOpen, setMenuOpen ] = useState(false);

  const onSearch = () => {
    props.navigator.pushPage({ component: SearchPage });
  }

  return (
    <Splitter>
      <SplitterContent>
        <Page 
          renderToolbar={() => 
            <Toolbar>
              <div className="center">
                Splash Page Title
              </div>
              <div className="right">
                <ToolbarButton onClick={onSearch}>
                  <Icon icon="md-search" />
                </ToolbarButton>
                <ToolbarButton onClick={() => setMenuOpen(true)}>
                  <Icon icon="md-menu" />
                </ToolbarButton>
              </div>
            </Toolbar>
          }>

          <div>
            Splash Page
          </div>
        </Page>
      </SplitterContent>
      <SplitterSide
        animation="overlay"
        mode="collapse"
        side="right"
        collapse={true}
        width="80%"
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}>
        <SideMenu />
      </SplitterSide>
    </Splitter>
  )

}

export default SplashPage;