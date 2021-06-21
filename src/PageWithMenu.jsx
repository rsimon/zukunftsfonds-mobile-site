import React from 'react';
import PageWithMenuDesktop from './PageWithMenuDesktop';
import PageWithMenuMobile from './PageWithMenuMobile';

/**
 * A hybrid page that applies desktop or mobile layout automatically
 * on the same content
 */
const PageWithenu = props => {

  return props.isDesktop ?
    <PageWithMenuDesktop
      className={props.className}
      current={props.title}
      title={props.title}
      navigator={props.navigator}>

      {props.children}

    </PageWithMenuDesktop> :

    <PageWithMenuMobile
      backButton={props.backButton}
      className={props.className}
      title={props.title}
      navigator={props.navigator}>
      
      {props.children}

    </PageWithMenuMobile>

}

export default PageWithenu;