import { StyleSheet } from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  safeAreaContent: {
    flex: 1,
  },

  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  petEventLogoView: {
    width: 150,
    height: 150,
    backgroundColor: colors.petEventLogoBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  petEventLogo: {
    width: 80,
    height: 120,
  },

  petEventTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  petEventText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.petEventTextColor,
    marginTop: 20,
  },
});
