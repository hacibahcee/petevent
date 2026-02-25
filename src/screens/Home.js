import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView,Text, View} from 'react-native'

const Home = () => {

  return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginVertical: 20, color:"#000000", fontSize: 16 }}>Home Screen</Text>
        </View>
      </SafeAreaView>
  )
}

export default Home