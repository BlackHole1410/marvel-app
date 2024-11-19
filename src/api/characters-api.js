// fonction getCharacters qui retourne la liste des personnages
// fonction getCharacterById qui retourne un personnage en fonction de son id en récupérant les données du fichier characters.json

import characters from '../data/characters.json';

// Fonction pour retourner la liste des personnages
export function getCharacters() {
    return characters;
}

// Fonction pour retourner un personnage par son ID
export function getCharacterById(id) {
    return characters.find(character => character.id === id);
}

// Fonction pour trier les personnages
export function getSortedCharacters(sortBy, order) {
    return characters.slice().sort((a, b) => {
        if (sortBy === "name") {
            if (order === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        } else if (sortBy === "modified") {
            if (order === "asc") {
                return new Date(a.modified) - new Date(b.modified);
            } else {
                return new Date(b.modified) - new Date(a.modified);
            }
        }
        return 0;
    });
}
