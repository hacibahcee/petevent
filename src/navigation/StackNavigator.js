import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../screens/Welcome';
import Home from '../screens/Home'

// HomeStack Starting Configure
const HomeStack = createNativeStackNavigator()
const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </HomeStack.Navigator>
);
// HomeStack Ending Configure

// RootStack Starting Configure
const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
);
// RootStack Ending Configure

export default RootStackScreen;