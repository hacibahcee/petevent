import { Dimensions, StyleSheet } from 'react-native';
const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    safeAreaContent: {
        flex: 1
    },
    languageButton: {
        alignSelf: 'flex-end',
        padding: 20,
    },

    languageButtonColor: {
        color: "#1D3B5A"
    },

    mainView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column'
    },

    peteventLogo: {
        width: window.width/4, 
        height: window.width/4
    },

    registButtonsView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    registButtons: {
        color: "#1D3B5A",
        borderColor: "#1D3B5A",
        borderWidth: 3,
        borderRadius: 10,
        padding: 20
    },
    
});