import React from 'react';
import { Icon, Page, Toolbar, ToolbarButton } from 'react-onsenui';

const SearchPage = props => {

  const onClose = () => {
    props.navigator.popPage();
  }

  return (
    <Page 
      renderToolbar={() => 
        <Toolbar>
          <div className="center">
            Search
          </div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="md-close" onClick={onClose} />
            </ToolbarButton>
          </div>
        </Toolbar>
      }>

      <div>
        Search
      </div>
    </Page>
  )

}

export default SearchPage;