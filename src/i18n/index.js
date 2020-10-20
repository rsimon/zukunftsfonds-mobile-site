class I18N {

  constructor() {
    this.messages = {};

    // For potential future extension
    this.loadMessages('de');
  }

  loadMessages = lang => {
    this.messages[lang] = require(`./messages_${lang}.json`);
  }

  t = (label, lang) =>
    lang in this.messages && label in this.messages[lang] ?
      this.messages[lang][label] : label;

}

const i18n = new I18N();

export default i18n;