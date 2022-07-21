// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Details from './screens/details';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{ title: 'Welcome' }}
        options={{headerShown : false}}
       
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          headerStyle: {
          backgroundColor: '#F3FFF6',
        },
     
      }}
       
      />
      <Stack.Screen
       name="Details" 
       component={Details} 
       options={{ headerStyle: {
        backgroundColor: '#F3FFF6',
      },}}
      />
    </Stack.Navigator>
  </NavigationContainer>

  );
}


