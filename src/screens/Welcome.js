import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../res/images'
import welcomeStyles from '../res/styles/welcomeStyles'

const Welcome = () => {

  const navigation = useNavigation()
  
  useEffect(()=>{
    setTimeout(() => navigation.reset({ routes: [{ name: 'LoggedOut' }] }), 2000);
  },[])
  
  return (
      <SafeAreaView style={welcomeStyles.safeAreaContent}>
        <View style={welcomeStyles.mainView}>
          <Image source={images.petevent_logo} style={welcomeStyles.peteventLogo} />
        </View>
      </SafeAreaView>
  )
}

export default Welcome