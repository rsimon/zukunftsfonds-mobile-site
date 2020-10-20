import React, { useState } from 'react';
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
import SideMenu from './SideMenu';

const PageWithMenu = props => {

  const [ isMenuOpen, setMenuOpen ] = useState(false);

  return (
    <Page className={props.className}>
      <Splitter>
        <SplitterContent>
          <Page 
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

          <SideMenu navigator={props.navigator} />

        </SplitterSide>
      </Splitter>
    </Page>
  )

}

export default PageWithMenu;