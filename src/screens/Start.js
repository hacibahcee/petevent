import { Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Start = () => {

  return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginVertical: 20, color:"#000000", fontSize: 16 }}>Start Screen</Text>
        </View>
      </SafeAreaView>
  )
}

export default Start;