import React from 'react';
import { BackButton, Page, Toolbar } from 'react-onsenui';
import { getResidences, getProfileComponent } from './Utils';

const ActorProfile = props => {

  const { item, store, navigator } = props;

  const residences = getResidences(item, store);

  const navigateTo = item => _ =>
    navigator.pushPage({ component: getProfileComponent(item), item });

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
        <div key={idx} className="description">{d.value}</div>
      )}

      {residences.map((r, idx) =>
        <div key={idx} className="residence" onClick={navigateTo(r)}>
          <span className="title">{r.properties.title}</span>
          { r.geometry?.title && <span className="location">{r.geometry.title}</span> }
        </div>
      )}
    </Page>
  )

}

export default ActorProfile;