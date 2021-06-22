import React from 'react';
import { Input } from 'react-onsenui';
import ResultList from './ResultList';
import SearchInstructions from './SearchInstructions';
import { getProfileComponent } from '../profiles/Utils';
import { useRecoilState } from 'recoil';
import { searchQueryState, searchResultState } from '../store/State';
import { useI18N }from '../i18n';
import PageWithMenuDesktop from '../PageWithMenuDesktop';

import './SearchPage.scss';

const DesktopSearchPage = props => {

  const i18n = useI18N();

  // We'll keep search state global, so we can persist across page navigation
  const [ search, setSearch ] = useRecoilState(searchQueryState);  
  const [ results, setResults ] = useRecoilState(searchResultState);

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
      component: getProfileComponent(result, true),
      item: result 
    });

  return (
    <PageWithMenuDesktop 
      className="search"
      current="Search"
      title="Search"
      {...props}>

      <div className="center">
        <Input
          value={search}
          placeholder={i18n('Search')}
          onChange={onSearch} />
      </div>

      {results.length > 0 ?
        <ResultList
          results={results} 
          onSelect={onSelectResult} /> : <SearchInstructions /> }
    </PageWithMenuDesktop>
  )

}

export default DesktopSearchPage;