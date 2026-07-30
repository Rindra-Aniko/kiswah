import idDict from './dictionaries/id.json';
import enDict from './dictionaries/en.json';

export type Locale = 'id' | 'en';
export type Dictionary = typeof idDict;

const dictionaries: Record<Locale, Dictionary> = {
  id: idDict,
  en: enDict,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.id;
};

export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';
