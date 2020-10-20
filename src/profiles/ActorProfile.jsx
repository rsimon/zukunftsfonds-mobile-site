import React from 'react';
import { BackButton, Icon, List, ListHeader, ListItem, Page, Toolbar } from 'react-onsenui';
import { getResidences, getTranslation, navigateTo } from './Utils';

import './Profile.scss';

const ActorProfile = props => {

  const { item, store, navigator } = props;

  const residences = getResidences(item, store);

  return (
    <Page 
      className="profile place"
      renderToolbar={() => 
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">
            { item.properties.title }
          </div>
        </Toolbar>
      }>

      {item.description.map((d, idx) => 
        <div key={idx} className="description">{getTranslation(d.value)}</div>
      )}

      <List
        className="related places"
        dataSource={residences}
        renderHeader={() =>
          <ListHeader>
            <Icon icon="md-pin" />
            <label>Orte</label>
          </ListHeader>
        }
        renderRow={(r, idx) => 
          <ListItem key={idx} className="related residence" onClick={navigateTo(r, navigator)}>
            <span className="title">{r.properties.title}</span>
          </ListItem>
        } />
    </Page>
  )

}

export default ActorProfile;