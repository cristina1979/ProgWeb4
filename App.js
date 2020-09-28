import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/exemplos/home';
import Pagina1 from './src/screens/exemplos/pagina1';
import Pagina2 from './src/screens/exemplos/pagina2';
import Pagina3 from './src/screens/exemplos/pagina3';
import filmesPopulares from './src/screens/filmes/filmesPopulares';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="p1" component={Pagina1} /> 
        <Stack.Screen name="p2" component={Pagina2} /> 
        <Stack.Screen name="p3" component={Pagina3} /> 
        <Stack.Screen name="filmes/populares" component={filmesPopulares} /> 
      </Stack.Navigator>
   </NavigationContainer>
  );
}
