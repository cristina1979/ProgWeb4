import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
  return (
    <>
      <View>
        <Text>Página Inicial</Text>
        <Text>Bem-vindo a Home</Text>

        <Button onPress={()=>navigation.navigate('pagina1')} > Ir para a página 1 </Button>
        <Button onPress={()=>navigation.navigate('filmes/populares')} > Ir para Filmes Populares </Button>
      </View>
    </>
  )
}
