import React from 'react';
import { Icon, List, ListHeader, ListItem, Page, Radio } from 'react-onsenui';
import { useRecoilState } from 'recoil';
import { languageState } from './store/State';
import { useI18N } from './i18n';

import SearchPageMobile from './search/SearchPageMobile';
import SearchPageDesktop from './search/SearchPageDesktop';

import SplashPageMobile from './splash/SplashPageMobile';
import SplashPageDesktop from './splash/SplashPageDesktop';

import SerbsInVienna from './projects/SerbsInVienna';
import CampOberhollabrunn from './projects/CampOberhollabrunn';
import OrthodoxRomanians from './projects/OrthodoxRomanians';

import Help from './help/Help';

import MobileTour from './tour/mobile/StartPage';
import DesktopTour from './tour/desktop/StartPage';

import './SideMenu.scss';

const SideMenu = props => {

  const [ language, setLanguage ] = useRecoilState(languageState);

  const i18n = useI18N();

  const onChangeLanguage = lang => {
    setLanguage(lang);
    window.localStorage.setItem('zukunftsfonds.language', lang);
  }

  const goTo = (mobileComponent, optDesktopComponent) => () => {

    const component = props.isDesktop && optDesktopComponent ? 
      optDesktopComponent : mobileComponent;

    const { pages } = props.navigator;
    const currentPage = pages.length > 0 ? pages[pages.length - 1].props.component : null;
    if (component !== currentPage)
      props.navigator.pushPage({ component });
    else 
      props.onClose && props.onClose();
  }

  const setSelected = pageName =>
    props.current === pageName ? 'selected' : null;

  return (
    <Page className="side-menu">
      <List>
        <ListItem 
          onClick={goTo(SplashPageMobile, SplashPageDesktop)}>
            <Icon icon="md-home" />
            <label className={setSelected('SplashPage')}>{i18n('Home')}</label>
        </ListItem>

        <ListItem onClick={goTo(SearchPageMobile, SearchPageDesktop)}>
          <Icon icon="md-search" />
          <label className={setSelected('Search')}>{i18n('Search')}</label>
        </ListItem>
      </List>

      <List>
        <ListHeader>
          <Icon icon="md-info-outline" />
          <label>{i18n('Information')}</label>
        </ListHeader>

        <ListItem onClick={goTo(Help)}>
          <label className={setSelected('Help')}>{i18n('User Help & App Info')}</label>
        </ListItem>  

        <ListItem className="projects">
          <div>
            <label>{i18n('Projects')}</label>
            <ul>
              <li 
                onClick={goTo(SerbsInVienna)}
                className={setSelected('SerbsInVienna')}>
                  
                {i18n('Serbs in Vienna 1741-1918')}
              </li>

              <li 
                onClick={goTo(CampOberhollabrunn)}
                className={setSelected('CampOberhollabrunn')}>
                  
                {i18n('Orthodox Refugees in Hollabrunn 1914-1918')}
              </li>

              <li 
                onClick={goTo(OrthodoxRomanians)}
                className={setSelected('OrthodoxRomanians')}>
                  
                {i18n('The Orthodox Romanians (1683-1918)')}
              </li>
            </ul>
          </div>
        </ListItem>
      </List>
      
      <List>
        <ListHeader>
          <Icon icon="md-walk" />
          <label>{i18n('Walking Tours')}</label>
        </ListHeader>
        
        <ListItem onClick={goTo(MobileTour, DesktopTour)}>
          <label className={setSelected('Tour')}>Oberhollabrunn</label>
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