import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { SafeAreaView,Text, View} from 'react-native'

const Welcome = () => {
  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(() => navigation.reset({ routes: [{ name: 'Home' }] }), 2000);
  },[])

  return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginVertical: 20, color:"#000000", fontSize: 16 }}>Welcome Screen</Text>
        </View>
      </SafeAreaView>
  )
}

export default Welcome