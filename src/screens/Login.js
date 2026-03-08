import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import loginStyles from '../res/styles/loginStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import images from '../res/images';
import { useEffect, useState } from 'react';
import { Modal, RadioButton } from 'react-native-paper';
import { changeLanguage } from '../config/languages/language';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules } from 'react-native';

const Login = () => {
  const [languageModal, setLanguageModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState('tr');

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) { }
  };

   const setNewLang = () => {
    storeData('language', selectedLang);
    RNRestart.Restart();
  };

  useEffect(() => {
  const getLanguage = async () => {
    const language = await AsyncStorage.getItem('language');

    if (language !== null) {
      setSelectedLang(language);
    } else {
      const deviceLang =
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLanguages[0].split('-')[0]
          : NativeModules.I18nManager.localeIdentifier.split('_')[0];

      await storeData('language', deviceLang);
      setSelectedLang(deviceLang);
    }
  };

  getLanguage();
}, []);

  return (
    <View style={loginStyles.background}>
      <SafeAreaView style={loginStyles.safeAreaContent}>
        <TouchableOpacity
          style={loginStyles.languageButton}
          onPress={() => setLanguageModal(true)}
        >
          <Icon
            name="globe"
            size={26}
            style={loginStyles.languageButtonColor}
          />
        </TouchableOpacity>
        <Modal
          visible={languageModal}
          onDismiss={() => setLanguageModal(false)}
          contentContainerStyle={{
            borderRadius: 10,
            marginBottom: 0,
            marginHorizontal: 10,
            backgroundColor: '#1D3B5A',
            borderWidth: 1,
            borderColor: 'red',
          }}
        >
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                height: 44,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'white',
                }}
              >
                {changeLanguage('language')}
              </Text>
              <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={() => setLanguageModal(false)}
              >
                {
                  <Icon
                    name="circle-xmark"
                    size={25}
                    color={'white'}
                  />
                }
              </TouchableOpacity>
            </View>
            <View style={{ margin: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton.Group
                    onValueChange={newValue => setSelectedLang(newValue)}
                    value={selectedLang}
                  >
                    <RadioButton.Item
                      label= {changeLanguage('turkish')}
                      value="tr"
                      color={'white'}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 0,
                        color: '#FFF',
                      }}
                      labelStyle={[
                        {
                          fontWeight: selectedLang == 'en' ? 'bold' : 'normal',
                          color: 'white',
                        },
                      ]}
                    />
                    <RadioButton.Item
                      label= {changeLanguage('english')}
                      value="en"
                      color={'white'}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 0,
                        color: '#FFF',
                      }}
                      labelStyle={[
                        //styles.radioLabel,
                        {
                          fontWeight: selectedLang == 'tr' ? 'bold' : 'normal',
                          color: 'white',
                        },
                      ]}
                    />
                  </RadioButton.Group>
                  <TouchableOpacity onPress={() => setNewLang()}>
                    <ImageBackground
                      source={images.enter_button}
                      style={{
                        width: 340,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: 'green',
                          fontSize: 25,
                          fontWeight: 'bold',
                        }}
                      >
                        {changeLanguage('ok')}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default Login;
