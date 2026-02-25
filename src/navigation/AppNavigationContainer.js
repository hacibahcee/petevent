import { NavigationContainer } from "@react-navigation/native"
import RootStackScreen from "./StackNavigator"

const AppNavigationContainer = () => {
  return (
   <NavigationContainer>
      <RootStackScreen/>
   </NavigationContainer>
  )
}

export default AppNavigationContainer
