import { atom } from 'recoil';

export const languageState = atom({
  key: 'language',
  default: 'en'
});

export const searchQueryState = atom({
  key: 'searchQuery',
  default: ''
});

export const searchResultState = atom({
  key: 'searchResults',
  default: []
});