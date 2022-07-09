import { createI18n } from 'vue-i18n';
import { getLocaleFromModules } from './util';

const localeModules = getLocaleFromModules();

const i18n = createI18n({
    // locale: appService.currentAppLang, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: localeModules, // set locale messages
});

export default i18n;
