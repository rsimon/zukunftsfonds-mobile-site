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

const DestkopPageWithMenu = props => {

  const [ isMenuOpen, setMenuOpen ] = useState(false);

  const onBackButton = () => {
    props.navigator.popPage();
  }

  return (
    <Page className={`${props.className} desktop`}>
      <header>
        <h1>Orthodox Europe</h1>
      </header>
      <div class="page-wrapper">
        <aside>
          <SideMenu 
            navigator={props.navigator} />
        </aside>
        <main>
          { props.children }
        </main>
      </div>
    </Page>
  )

}

export default DestkopPageWithMenu;