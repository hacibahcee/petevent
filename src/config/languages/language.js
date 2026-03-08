import en from './en.json';
import tr from './tr.json';
import { Platform, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getDeviceLanguage = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0].split('-')[0]
    : NativeModules.I18nManager.localeIdentifier.split('_')[0];
};

const getDefaultLanguage = async () => {
  const language = await AsyncStorage.getItem('language');
  const deviceLang = language ?? getDeviceLanguage();

  return deviceLang === 'tr' ? 'tr' : 'en';
};

export const changeLanguage = async (name) => {
  const defaultLang = await getDefaultLanguage();
  const selectedLang = defaultLang === 'tr' ? tr : en;

  return typeof selectedLang[name] !== 'undefined'
    ? selectedLang[name]
    : name;
};