export async function getCharactersRM() {

    const RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api/character';

    const rawData = await fetch(RICK_AND_MORTY_URL);
    const jsonData = await rawData.json();    
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
    })
}