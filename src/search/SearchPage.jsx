import React, { useState } from 'react';
import { Icon, Page, SearchInput, Toolbar, ToolbarButton } from 'react-onsenui';
import ResultList from './ResultList';
import PlaceProfile from '../profiles/PlaceProfile';

const SearchPage = props => {

  const [ search, setSearch ] = useState('');
  const [ results, setResults ] = useState([]);

  const onSearch = evt => {
    const query = evt.target.value.toLowerCase();
    setSearch(query);

    const results = props.store.searchAll(query);
    setResults(results);
  }

  const onSelectResult = result => {
    props.navigator.pushPage({ component: PlaceProfile, item: result });
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