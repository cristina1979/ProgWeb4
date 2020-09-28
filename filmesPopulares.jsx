import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import apiFilmes from '../../services/apiFilmes';

export default () => {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    apiFilmes.get('movie/popular?language=pt-BR').then(results => {
        setFilmes(results.data.results)
    })

    }, [])
    
  return (
    <>
      <ScrollView>
        {filmes.map(item => (
        <Card key={item.id}>
        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.overview}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Ver Mais</Button>
        </Card.Actions>
        </Card>
        ))}
      </ScrollView>
    </>
  )
}
