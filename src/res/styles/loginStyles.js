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

  languageButton: {
    alignSelf: 'flex-end',
    padding: 20,
  },

  languageButtonColor: {
    color: colors.buttonOrangeColor,
  },

  modalContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: colors.petEventLogoBackground,
    borderWidth: 1,
    borderColor: colors.buttonOrangeColor,
  },

  modalContainerInner: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  languageModalTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  languageModalTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.petEventTextColor,
  },

  languageModalCross: {
    alignSelf: 'center'
  },

  languagesText: {
    paddingHorizontal: 0,
    color: colors.petEventTextColor
  }
});
