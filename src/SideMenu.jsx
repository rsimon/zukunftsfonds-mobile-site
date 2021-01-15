import React from 'react';
import { Icon, List, ListHeader, ListItem, Page, Radio } from 'react-onsenui';
import { useRecoilState } from 'recoil';
import { languageState } from './store/State';
import { fetchUserLocation } from './tour';
import { useI18N } from './i18n';

import SearchPage from './search/SearchPage';
import SplashPage from './splash/SplashPage';

import SerbsInVienna from './pages/projects/SerbsInVienna';
import CampOberhollabrunn from './pages/projects/CampOberhollabrunn';
import Help from './pages/Help';

import './SideMenu.scss';

const SideMenu = props => {

  const [ language, setLanguage ] = useRecoilState(languageState);

  const i18n = useI18N();

  const onChangeLanguage = lang => {
    setLanguage(lang);
    window.localStorage.setItem('zukunftsfonds.language', lang);
  }

  const goTo = component => () => {
    const { pages } = props.navigator;
    const currentPage = pages.length > 0 ? pages[pages.length - 1].props.component : null;
    if (component !== currentPage)
      props.navigator.pushPage({ component });
    else 
      props.onClose();
  }

  // Just for testing
  const onStartTour = () =>
    fetchUserLocation()
      .then(pos => console.log(pos))
      .catch(() => console.log('rejected or not available'));

  return (
    <Page className="side-menu">
      <List>
        <ListItem onClick={goTo(SplashPage)}>
          <Icon icon="md-home" />
          <label>{i18n('Home')}</label>
        </ListItem>
        <ListItem onClick={goTo(SearchPage)}>
          <Icon icon="md-search" />
          <label>{i18n('Search')}</label>
        </ListItem>
      </List>

      <List>
        <ListHeader>
          <Icon icon="md-info-outline" />
          <label>{i18n('Information')}</label>
        </ListHeader>

        <ListItem onClick={goTo(Help)}>
          <label>{i18n('Help')}</label>
        </ListItem>  

        <ListItem className="projects">
          <div>
            <label>{i18n('Projects')}</label>
            <ul>
              <li onClick={goTo(SerbsInVienna)}>{i18n('Serbs in Vienna 1741-1918')}</li>
              <li onClick={goTo(CampOberhollabrunn)}>{i18n('Orthodox Refugees in Hollabrunn 1914-1918')}</li>
            </ul>
          </div>
        </ListItem>
      </List>
      
      <List>
        <ListHeader>
          <Icon icon="md-walk" />
          <label>{i18n('Walking Tours')}</label>
        </ListHeader>
        
        <ListItem onClick={onStartTour}>
          <label>Oberhollabrunn</label>
        </ListItem>
      </List>

      <List className="set-language">
        <ListHeader>
          <Icon icon="md-translate" />
          <label>{i18n('Language')}</label>
        </ListHeader>
        
        <ListItem>
          <label className="left">
            <Radio 
              inputId='EN' 
              name='EN' 
              onChange={() => onChangeLanguage('en')} 
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
              onChange={() => onChangeLanguage('de')} 
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