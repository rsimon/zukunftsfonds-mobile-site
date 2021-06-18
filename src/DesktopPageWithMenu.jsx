import React from 'react';
import { Page } from 'react-onsenui';
import SideMenu from './SideMenu';

const DestkopPageWithMenu = props => {

  return (
    <Page className={`${props.className} desktop`}>
      <header>
        <h1>Orthodox Europe</h1>
      </header>
      <div className="page-wrapper">
        <aside>
          <SideMenu 
            current={props.current}
            isDesktop={true}
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