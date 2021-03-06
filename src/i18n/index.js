import { useRecoilValue } from 'recoil';
import { languageState } from '../store/State';

class I18N {

  constructor() {
    this.messages = {};

    // For potential future extension
    this.loadMessages('de');
  }

  loadMessages = lang => {
    this.messages[lang] = require(`./messages_${lang}.json`);
  }

  t = lang => label =>
    lang in this.messages && label in this.messages[lang] ?
      this.messages[lang][label] : label;

}

const i18n = new I18N();

// Wrapping I18N in a cool helper hook
export const useI18N = () => {

  const lang = useRecoilValue(languageState);
  return i18n.t(lang);

}

// Just a tiny shorthand to use current language setting more easily
export const useLang = ()  =>
  useRecoilValue(languageState)

// Helper to handle the ad-hoc 'bilingual' description format of the project
export const useBilingual = () => {
  
  const lang = useRecoilValue(languageState);

  // Helper to remove trailing + leading whitespace and dashes
  const trim = str =>
    str.replace(/^[-,\s]+ | [-,\s]+$/g, '');
 
  return description => {
    // Project convention is to use 12 dash characters as separators. Anyways,
    // people aren't doing this consistently, sometimes using more or fewer dashes.
    // We'll split on everything thats more than 9 consecutive dashes.
    if (description.indexOf('---------') === -1) {
      return description;
    } else {
      return lang === 'de' ? trim(description.split('---------')[0]) : trim(description.split('---------')[1]);
    }
  }

}