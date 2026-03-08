import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0F172A',
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
    backgroundColor: '#334155',
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
    color: '#F1F5F9',
    marginTop: 20,
  },
});
