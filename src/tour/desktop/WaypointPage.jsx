import React from 'react';
import { useI18N } from '../../i18n';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';

const WaypointPage = props => {
  
  const i18n = useI18N();

  return (
    <PageWithMenuDesktop
      className="tour-desktop"
      title={i18n('Walking Tour')}
      current="Tour"
      {...props}>

      Hello World

    </PageWithMenuDesktop>
  )

}

export default WaypointPage;