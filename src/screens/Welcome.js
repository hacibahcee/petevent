import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../res/images';
import welcomeStyles from '../res/styles/welcomeStyles';
import { Text } from 'react-native-gesture-handler';

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(
      () => navigation.reset({ routes: [{ name: 'LoggedOut' }] }),
      2000,
    );
  }, []);

  return (
    <View style={welcomeStyles.background}>
      <SafeAreaView style={welcomeStyles.safeAreaContent}>
        <View style={welcomeStyles.mainView}>
          <View style={welcomeStyles.petEventLogoView}>
            <Image
              source={images.petevent_logo}
              style={welcomeStyles.petEventLogo}
            />
          </View>
          <View style={welcomeStyles.petEventTextView}>
            <Text style={welcomeStyles.petEventText}>PetEvent</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
