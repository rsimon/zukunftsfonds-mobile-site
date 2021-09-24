import { atom } from 'recoil';

export const languageState = atom({
  key: 'language',
  default: window.localStorage.getItem('zukunftsfonds.language') || 'en'
});

export const searchQueryState = atom({
  key: 'searchQuery',
  default: ''
});

export const searchResultState = atom({
  key: 'searchResults',
  default: []
});

export const overviewMapState = atom({
  key: 'overviewMap',
  default: { zoom: null, center: null }
});