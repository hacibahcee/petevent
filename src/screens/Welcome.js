import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../res/images'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Welcome = () => {
  
  return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={images.petevent_logo} style={{ width: 500, height: 500}} />
          <Animatable.View duration={3000} delay={1500} animation={'fadeOut'}>
            <Animatable.Text duration={3000} animation={'fadeIn'} style={{ marginVertical: 20, color:"#000000", fontSize: 16 }}>Hoşgelmişsen to Petevent!</Animatable.Text>
            <Icon name="arrow-left" size={26} color="#000000" />
          </Animatable.View>
        </View>
      </SafeAreaView>
  )
}

export default Welcome