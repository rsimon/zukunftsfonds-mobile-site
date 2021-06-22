import React from 'react';
import { Page } from 'react-onsenui';
import SideMenu from './SideMenu';

const PageWithMenuDesktop = props => {

  console.log(props);

  if (props.isDesktop && props.title) {
    console.log('title');
    window.document.title = `Orthodox Europe | ${props.title}`;
  } else {
    window.document.title = "Orthodox Europe";
  }

  return (
    <Page className={`${props.className} desktop`}>
      <header>
        <h1>Orthodox Europe {props.title && <span className="subtitle">{`| ${props.title}`}</span> }</h1>
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

export default PageWithMenuDesktop;