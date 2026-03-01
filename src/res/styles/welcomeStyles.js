import { Dimensions, StyleSheet } from 'react-native';
const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    safeAreaContent: {
        flex: 1
    },

    mainView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    peteventLogo: {
        width: window.width/1.5, 
        height: window.width/1.5
    }

});