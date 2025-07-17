import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getCharactersRM } from './lib/api';
import { Character } from './types';
import "./global.css"


export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  console.log('characters', characters);
  
  useEffect(() => {
    getCharactersRM().then(characters => setCharacters(characters));
  }, []);


  return (
    <View className="flex-1 bg-gray-900 px-4 pt-10">
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {characters.map((character) => (
          <View
            key={character.id}
            className="bg-white rounded-xl p-4 mb-4 shadow-md"
          >
            <Image
              source={{ uri: character.image }}
              className="w-full h-60 rounded-lg mb-2"
              resizeMode="cover"
            />
            <Text className="text-lg font-bold text-gray-800">
              {character.name}
            </Text>
            <Text className="text-gray-600">Gender: {character.gender}</Text>
            <Text className="text-gray-600">Status: {character.status}</Text>
            <Text className="text-gray-600">Species: {character.species}</Text>
          </View>
        ))}
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
  image: { 
    width: 100,
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
