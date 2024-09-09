import ru from './locales/ru.json';
import en from './locales/en.json';
import kk from './locales/kk.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    en,
    ru,
    kk,
  },
}));
