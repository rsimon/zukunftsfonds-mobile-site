import React from 'react';
import { Icon, Page, Toolbar, ToolbarButton } from 'react-onsenui';
import SearchPage from '../search/SearchPage';

const SplashPage = props => {

  const onSearch = () => {
    props.navigator.pushPage({ component: SearchPage });
  }

  return (
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
          </div>
        </Toolbar>
      }>

      <div>
        Splash Page
      </div>
    </Page>
  )

}

export default SplashPage;