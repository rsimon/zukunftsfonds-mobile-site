import React from 'react';
import { useI18N } from '../../i18n';
import PageWithMenuDesktop from '../../PageWithMenuDesktop';

const StartPage = props => {

  const i18n = useI18N();

  return (
    <PageWithMenuDesktop
      title={i18n('Walking Tour')}
      current="Tour"
      {...props}>
    </PageWithMenuDesktop>
  )

}

export default StartPage;