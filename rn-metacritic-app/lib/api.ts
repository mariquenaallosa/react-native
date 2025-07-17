import { Character } from '../types';

interface RickAndMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  // Otros campos que puedan venir en la respuesta de la API
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: string;
}

interface RickAndMortyResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickAndMortyCharacter[];
}

export async function getCharactersRM(): Promise<Character[]> {
    const RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api/character';

    const rawData = await fetch(RICK_AND_MORTY_URL);
    const jsonData = await rawData.json() as RickAndMortyResponse;    
    const results = jsonData.results;    

    return results.map(item => {
        const { id, name, status, species, gender, image } = item;
        return {
            id,
            name,
            status,
            species,
            gender,
            image
        }
    });
}
