import { createContext, useContext } from 'react';

export const LanguageContext = createContext('ET');
export function useLanguage() { return useContext(LanguageContext); }
