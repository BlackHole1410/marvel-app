// Import data from characters.json with import
import characters from '../data/characters.json';


// Fonction qui retourne la liste des personnages
export function getCharacters() {
    // Return the list of characters
    return characters;
}

export const getCharacterById = (id) => {
    // Search for the character with the corresponding id
    const character = characters.find((character) => character.id === id);

    // If the character doesn't exist, return null
    if (!character) {
        return null;
    }

    // If the character exists, return it
    return character;
};
