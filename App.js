import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { CadastroContatos } from './src/components/screens/CadastroContatos';
import { ConsultaContatos } from './src/components/screens/ConsultaContatos';
import { Login } from './src/components/screens/Login';
import { Password } from './src/components/screens/Password';
import { Register } from './src/components/screens/Register';
import { EditarContato } from './src/components/screens/EditarContato';
import { ExcluirContato } from './src/components/screens/ExcluirContato';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <PaperProvider>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name='login' component={Login}/>
              <Stack.Screen name='register' component={Register}/>
              <Stack.Screen name='password' component={Password}/>
              <Stack.Screen name='consulta-contatos' component={ConsultaContatos}/>
              <Stack.Screen name='cadastro-contatos' component={CadastroContatos}/>
              <Stack.Screen name='editar-contato' component={EditarContato}/>
              <Stack.Screen name='excluir-contato' component={ExcluirContato}/>
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

