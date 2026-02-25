import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../res/images'

const Welcome = () => {
  
  return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={images.petevent_logo} style={{ width: 500, height: 500}} />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, color: '#933CAC' }}>Hoşgelmişsen to Petevent!</Text>
        </View>
      </SafeAreaView>
  )
}

export default Welcome