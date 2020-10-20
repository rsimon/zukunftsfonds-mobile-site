import { atom } from 'recoil';

export const languageState = atom({
  key: 'language',
  default: 'EN'
});