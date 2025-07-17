import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { getCharactersRM } from './lib/api';


export default function App() {
  const [characters, setCharacters] = useState([]);
  console.log('characters', characters);
  


  useEffect(() => {
    getCharactersRM().then(characters => setCharacters(characters));
  }, []);



  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {characters.map((character) => {
          return(
          <View key={character.id} style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.gender}>Gender: {character.gender}</Text>
            <Text style={styles.status}>Status: {character.status}</Text>
            <Text style={styles.species}>Species: {character.species}</Text>
          </View>)
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  image: { width: 100,
    height: 100,
    borderRadius: 10,
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold', 
  },
  gender: {
    color: '#fff',
    fontSize: 16,
  },
  status: {
    color: '#fff',
    fontSize: 16,
  },
  species: {
    color: '#fff',
    fontSize: 16,
  }
});
