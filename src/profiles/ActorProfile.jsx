import React from 'react';
import { Icon, List, ListHeader, ListItem } from 'react-onsenui';
import { getResidences, getTranslation, navigateTo } from './Utils';
import { useRecoilValue } from 'recoil';
import { languageState } from '../store/State';
import PageWithMenu from '../PageWithMenu';
import i18n from '../i18n';

import './Profile.scss';

const ActorProfile = props => {

  const language = useRecoilValue(languageState);

  const { item, store, navigator } = props;

  const residences = getResidences(item, store);

  return (
    <PageWithMenu 
      backButton
      className="profile actor"
      title={item.properties.title}
      navigator={props.navigator}>

      {item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value, language)}</div>
      )}

      <List
        className="related places"
        dataSource={residences}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-pin" />
            <label>{i18n.t('Places', language)}</label>
          </ListHeader>
        }
        renderRow={(r, idx) => 
          <ListItem key={idx} className="related residence" onClick={navigateTo(r, navigator)}>
            <span className="title">{r.properties.title}</span>
          </ListItem>
        } />
    </PageWithMenu>
  )

}

export default ActorProfile;