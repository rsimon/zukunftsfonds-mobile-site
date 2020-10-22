import React from 'react';
import { Icon, List, ListHeader, ListItem } from 'react-onsenui';
import { getResidences, navigateTo } from './Utils';
import PageWithMenu from '../PageWithMenu';
import { useI18N, useBilingual } from '../i18n';
import ImageSlider, { hasDepictions } from './ImageSlider';

import './Profile.scss';

const ActorProfile = props => {

  const i18n = useI18N();

  const getTranslation = useBilingual();

  const { item, store, navigator } = props;

  const residences = getResidences(item, store);
  
  return (
    <PageWithMenu 
      backButton
      className="profile actor"
      title={item.properties.title}
      navigator={props.navigator}>

      { item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value)}</div>
      )}

      { hasDepictions(item) && 
        <ImageSlider depictions={item.depictions} />
      }

      <List
        className="related places"
        dataSource={residences}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-pin" />
            <label>{i18n('Places')}</label>
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