import { StatusBar} from 'react-native'
import AppNavigationContainer from './src/navigation/AppNavigationContainer'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={true}
      />
      <AppNavigationContainer/>
    </SafeAreaProvider> 
    
  )
}

export default App