'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, Dictionary, getDictionary, LOCALE_COOKIE_NAME } from './index';

interface LanguageContextType {
  locale: Locale;
  dict: Dictionary;
  setLocale: (newLocale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = 'id',
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dict, setDict] = useState<Dictionary>(() => getDictionary(initialLocale));

  useEffect(() => {
    // Read locale from document.cookie on mount if available
    const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE_NAME}=([^;]*)`));
    if (match) {
      const cookieLocale = match[1] as Locale;
      if (cookieLocale === 'id' || cookieLocale === 'en') {
        setLocaleState(cookieLocale);
        setDict(getDictionary(cookieLocale));
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setDict(getDictionary(newLocale));

    // Save to cookie (1 year expiry)
    document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // Dispatch custom event if components need to react
    window.dispatchEvent(new Event('localeChange'));
  };

  return (
    <LanguageContext.Provider value={{ locale, dict, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if used outside provider
    return {
      locale: 'id' as Locale,
      dict: getDictionary('id'),
      setLocale: () => {},
    };
  }
  return context;
}
