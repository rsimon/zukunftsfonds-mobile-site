import React, { useState } from 'react';
import { Icon, Page, SearchInput, Toolbar, ToolbarButton } from 'react-onsenui';
import ResultList from './ResultList';
import ActorProfile from '../profiles/ActorProfile';
import PlaceProfile from '../profiles/PlaceProfile';

import './SearchPage.scss';

const PROFILE_COMPONENTS = {
  'crm:E18_Physical_Thing': PlaceProfile,
  'crm:E21_Person': ActorProfile
}

const SearchPage = props => {

  const [ search, setSearch ] = useState('');
  const [ results, setResults ] = useState([]);

  const onSearch = evt => {
    const query = evt.target.value.toLowerCase();

    // For some weird reason, OnsenUI SearchInput also triggers
    // onChange when losing focus, causing an unwanted re-render
    if (search !== query) {
      setSearch(query);

      const results = props.store.searchAll(query);
      setResults(results);
    }
  }

  const onSelectResult = result => {
    props.navigator.pushPage({ 
      component: PROFILE_COMPONENTS[result.crmClass], 
      item: result 
    });
  }

  const onClose = () => {
    props.navigator.popPage();
  }

  return (
    <Page
      className="search"
      renderToolbar={() => 
        <Toolbar>
          <SearchInput
            value={search}
            onChange={onSearch} />
          
          <div className="right">
            <ToolbarButton>
              <Icon icon="md-close" onClick={onClose} />
            </ToolbarButton>
          </div>
        </Toolbar>
      }>

      <ResultList
        results={results} 
        onSelect={onSelectResult} />
    </Page>
  )

}

export default SearchPage;