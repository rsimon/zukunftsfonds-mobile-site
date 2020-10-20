import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { BackButton, Icon, Page, Input, Toolbar, ToolbarButton } from 'react-onsenui';
import ResultList from './ResultList';
import { getProfileComponent } from '../profiles/Utils';
import { languageState } from '../store/State';
import i18n from '../i18n';

import './SearchPage.scss';

const SearchPage = props => {

  const [ search, setSearch ] = useState('');
  
  const [ results, setResults ] = useState([]);

  const language = useRecoilValue(languageState);
  
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

  const onClearSearch = () => setSearch('');

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
              placeholder={i18n.t('Search', language)}
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