import React, { useState } from 'react';
import { Icon, Page, SearchInput, Toolbar, ToolbarButton } from 'react-onsenui';
import ResultList from './ResultList';

const SearchPage = props => {

  const [ search, setSearch ] = useState('');
  const [ results, setResults ] = useState([]);

  const onSearch = evt => {
    const query = evt.target.value.toLowerCase();
    setSearch(query);

    const results = props.store.places.filter(p => p.properties.title.toLowerCase().startsWith(query));
    setResults(results);
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

      <ResultList results={results} />
    </Page>
  )

}

export default SearchPage;