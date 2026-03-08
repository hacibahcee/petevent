import en from './en.json';
import tr from './tr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'react-native-localize';

let defaultLang = 'tr';

const getDeviceLanguage = () => {
  const locales = getLocales();
  const languageCode = locales?.[0]?.languageCode;

  if (languageCode === 'tr') {
    return 'tr';
  }
  return 'en';
};

export const initLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem('language');

    if (language === 'tr' || language === 'en') {
      defaultLang = language;
    } else {
      defaultLang = getDeviceLanguage();
      await AsyncStorage.setItem('language', defaultLang);
    }
  } catch (e) {
    defaultLang = getDeviceLanguage();
  }

  return defaultLang;
};

export const setLanguage = async (language) => {
  const selectedLanguage = language === 'tr' ? 'tr' : 'en';
  defaultLang = selectedLanguage;

  try {
    await AsyncStorage.setItem('language', selectedLanguage);
  } catch (e) { }

  return selectedLanguage;
};

export const changeLanguage = (name) => {
  const selectedLang = defaultLang === 'tr' ? tr : en;

  if (typeof selectedLang[name] !== 'undefined') {
    return selectedLang[name];
  }

  return name;
};