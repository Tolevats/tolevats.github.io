import en from './en.json';
import es from './es.json';

const LANGUAGES = {
  en,
  es,
};

export function getI18n(locale: keyof typeof LANGUAGES = 'en') {
  return LANGUAGES[locale];
}