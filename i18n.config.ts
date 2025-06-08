import ru from '~/i18n/locales/ru.json';
import en from '~/i18n/locales/en.json';
import kk from '~/i18n/locales/kk.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  locales: [
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
    { code: 'kk', name: 'KZ' },
  ],
  messages: {
    en,
    ru,
    kk,
  },
}));
