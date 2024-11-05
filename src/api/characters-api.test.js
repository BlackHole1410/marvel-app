// FILEPATH: /c:/Dev logiciel web/S5/Marvel-app/marvel-app/src/api/characters-api.test.js

import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// Mock the characters data
jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' }
]);

describe('Characters API', () => {
    test('getCharacters should return the full list of characters', () => {
        const result = getCharacters();
        expect(result).toEqual([
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Thor' }
        ]);
    });

    test('getCharacterById should return the correct character for a given ID', () => {
        const result = getCharacterById(1);
        expect(result).toEqual({ id: 1, name: 'Iron Man' });
    });

    test('getCharacterById should return undefined for an invalid ID', () => {
        const result = getCharacterById(999);
        expect(result).toBeUndefined();
    });
});