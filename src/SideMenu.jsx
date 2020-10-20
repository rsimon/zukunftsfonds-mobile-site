import React from 'react';
import { Icon, List, ListHeader, ListItem, Page, Radio } from 'react-onsenui';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { languageState } from './store/State';
import i18n from './i18n';
import SearchPage from './search/SearchPage';

import './SideMenu.scss';

const SideMenu = props => {

  const language = useRecoilValue(languageState);

  const setLanguage = useSetRecoilState(languageState);

  const onSearch = () =>
    props.navigator.pushPage({ component: SearchPage });

  return (
    <Page className="side-menu">
      <List>
        <ListItem onClick={onSearch}>
          <Icon icon="md-search" />
          <label>{i18n.t('Search', language)}</label>
        </ListItem>
      </List>

      <List>
        <ListHeader>
          <Icon icon="md-info-outline" />
          <label>{i18n.t('Information', language)}</label>
        </ListHeader>

        <ListItem>
          <label>{i18n.t('Help', language)}</label>
        </ListItem>  

        <ListItem className="projects">
          <div>
            <label>{i18n.t('Projects', language)}</label>
            <ul>
              <li>Orthodoxes Wien</li>
              <li>Oberhollabrunn</li>
            </ul>
          </div>
        </ListItem>
        
        <ListItem>
          <label>{i18n.t('About Us', language)}</label>
        </ListItem>
      </List>
      
      <List>
        <ListHeader>
          <Icon icon="md-walk" />
          <label>{i18n.t('Walking Tours', language)}</label>
        </ListHeader>
        
        <ListItem>
          <label>Oberhollabrunn</label>
        </ListItem>
      </List>

      <List className="set-language">
        <ListHeader>
          <Icon icon="md-translate" />
          <label>{i18n.t('Language', language)}</label>
        </ListHeader>
        
        <ListItem>
          <label className="left">
            <Radio 
              inputId='EN' 
              name='EN' 
              onChange={() => setLanguage('en')} 
              checked={language === 'en'} />
          </label>
          
          <label htmlFor='EN' className="center">
            English
          </label>
        </ListItem>
        <ListItem>
          <label className="left">
            <Radio 
              inputId='DE' 
              name='DE' 
              onChange={() => setLanguage('de')} 
              checked={language === 'de'} />
          </label>
          
          <label htmlFor='DE' className="center">
            Deutsch
          </label>
        </ListItem>
      </List>
    </Page>
  )

}

export default SideMenu;