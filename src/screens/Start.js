import { Image, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import startStyles from '../res/styles/startStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import images from '../res/images'


const Start = () => {

  return (
      <SafeAreaView style={startStyles.safeAreaContent}>
        <TouchableOpacity
          activeScale={0.95}
          style={startStyles.languageButton}>
          <View animation="fadeIn">
            <Icon name="globe" size={26} style={startStyles.languageButtonColor} />
          </View>
        </TouchableOpacity>
        <View style={startStyles.mainView}>
          <Image source={images.petevent_logo} style={startStyles.peteventLogo} /> 
          <View style={startStyles.registButtonsView}>
            <TouchableOpacity
              activeScale={0.95}
              style={startStyles.languageButton}>
              <View style={{ alignItems: 'center' }} animation="fadeIn">
                <Icon name="user" size={30} style={startStyles.registButtons} />
                <Text
                      style={{ fontSize: 16, marginTop: 10 }}>
                      {'register'}
                    </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeScale={0.95}
              style={startStyles.languageButton}>
              <View  style={{ alignItems: 'center' }} animation="fadeIn">
                <Icon name="key" size={30} style={startStyles.registButtons} />
                <Text
                      style={{ fontSize: 16, marginTop: 10 }}>
                      {'login'}
                    </Text>
              </View>
              
            </TouchableOpacity>

          </View>
          <View style={startStyles.registButtonsView}>
            <TouchableOpacity
              activeScale={0.95}
              style={startStyles.languageButton}>
              <View  style={{ alignItems: 'center' }} animation="fadeIn">
                <Icon name="apple" size={30} style={startStyles.registButtons} />
                <Text
                      style={{ fontSize: 16, marginTop: 10 }}>
                      {'login'}
                    </Text>
              </View>
              
            </TouchableOpacity>

          </View>
          <View style={startStyles.registButtonsView}>
            <TouchableOpacity
              activeScale={0.95}
              style={startStyles.languageButton}>
              <View  style={{ alignItems: 'center' }} animation="fadeIn">
                <Icon name="google" size={30} style={startStyles.registButtons} />
                <Text
                      style={{ fontSize: 16, marginTop: 10 }}>
                      {'login'}
                    </Text>
              </View>
              
            </TouchableOpacity>

          </View>

         
        
        </View>
      </SafeAreaView>
  )
}


export default Start;