import React from 'react';
import { BackButton, Page, Toolbar } from 'react-onsenui';

const ActorProfile = props => {

  const { item } = props;

  console.log(item);

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

      { item.description.map((d, idx) => 
        <div key={idx} className="description">{d.value}</div>
      )}
    </Page>
  )

}

export default ActorProfile;