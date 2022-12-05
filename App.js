import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { Login } from './src/components/screens/Login';
import { Password } from './src/components/screens/Password';
import { Register } from './src/components/screens/Register';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <PaperProvider>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: true}}>
              <Stack.Screen name='login' component={Login}/>
              <Stack.Screen name='register' component={Register}/>
              <Stack.Screen name='password' component={Password}/>
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
