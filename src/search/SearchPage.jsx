import React from 'react';
import { BackButton, Icon, Page, Input, Toolbar, ToolbarButton } from 'react-onsenui';
import ResultList from './ResultList';
import { getProfileComponent } from '../profiles/Utils';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchQueryState, searchResultState } from '../store/State';
import { useI18N }from '../i18n';

import './SearchPage.scss';

const SearchPage = props => {

  const i18n = useI18N();

  // We'll keep search state global, so we can persist across page navigation
  const search = useRecoilValue(searchQueryState);
  const setSearch = useSetRecoilState(searchQueryState);
  
  const results = useRecoilValue(searchResultState);
  const setResults = useSetRecoilState(searchResultState);

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

  const onSelectResult = result =>
    props.navigator.pushPage({ 
      component: getProfileComponent(result), 
      item: result 
    });

  const onClearSearch = () => {
    setSearch('');
    setResults([]);
  }

  return (
    <Page
      className="search"
      renderToolbar={() => 
        <Toolbar>
          <div className="left">
            <BackButton />
          </div>

          <div className="center">
            <Input
              value={search}
              placeholder={i18n('Search')}
              onChange={onSearch} />
          </div>
          
          <div className="right">
            <ToolbarButton>
              <Icon icon="md-close" onClick={onClearSearch} />
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