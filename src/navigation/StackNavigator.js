import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../screens/Welcome';
import Home from '../screens/Home'
import Start from '../screens/Start';

const AuthStack = createNativeStackNavigator()
const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Start" component={Start} options={{ headerShown: false }} />
    </AuthStack.Navigator>
);

const HomeStack = createNativeStackNavigator()
const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </HomeStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="LoggedOut"
            component={AuthStackScreen}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="LoggedIn"
            component={HomeStackScreen}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
);

export default RootStackScreen;