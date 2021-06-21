import React, { useState } from 'react';
import SideMenu from './SideMenu';
import { 
  BackButton,
  Icon, 
  Page, 
  Splitter, 
  SplitterContent, 
  SplitterSide, 
  Toolbar, 
  ToolbarButton 
} from 'react-onsenui';

const PageWithMenuMobile = props => {

  const [ isMenuOpen, setMenuOpen ] = useState(false);

  const onBackButton = () => {
    props.navigator.popPage();
  }

  return (
    <Page className={props.className}>
      <Splitter>
        <SplitterContent>
          <Page 
            onDeviceBackButton={onBackButton}
            renderToolbar={() => 
              <Toolbar>
                { props.backButton &&
                  <BackButton />
                }
                <div className="center">
                  { props.title }
                </div>
                <div className="right">
                  <ToolbarButton onClick={() => setMenuOpen(true)}>
                    <Icon icon="md-menu" />
                  </ToolbarButton>
                </div>
              </Toolbar>
            }>

            { props.children }

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

          <SideMenu 
            navigator={props.navigator} 
            onClose={() => setMenuOpen(false)} />

        </SplitterSide>
      </Splitter>
    </Page>
  )

}

export default PageWithMenuMobile;