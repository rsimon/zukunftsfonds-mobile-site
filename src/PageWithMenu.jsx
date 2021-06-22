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
      current={props.title}
      {...props}>

      {props.children}

    </PageWithMenuDesktop> :

    <PageWithMenuMobile
      {...props}>
      
      {props.children}

    </PageWithMenuMobile>

}

export default PageWithenu;