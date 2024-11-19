// FILEPATH: /c:/Dev logiciel web/S5/Marvel-app/marvel-app/src/api/characters-api.test.js

import { getCharacters, getCharacterById, getSortedCharacters } from './characters-api';

// Mock the characters data
jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man', modified: '2023-01-01' },
    { id: 2, name: 'Captain America', modified: '2023-01-02' },
    { id: 3, name: 'Thor', modified: '2023-01-03' }
]);

describe('Characters API', () => {
    test('getCharacters should return the full list of characters', () => {
        const result = getCharacters();
        expect(result).toEqual([
            { id: 1, name: 'Iron Man', modified: '2023-01-01' },
            { id: 2, name: 'Captain America', modified: '2023-01-02' },
            { id: 3, name: 'Thor', modified: '2023-01-03' }
        ]);
    });

    test('getCharacterById should return the correct character for a given ID', () => {
        const result = getCharacterById(1);
        expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2023-01-01' });
    });

    test('getCharacterById should return undefined for an invalid ID', () => {
        const result = getCharacterById(999);
        expect(result).toBeUndefined();
    });
});
test('getSortedCharacters should sort characters by name in ascending order', () => {
    const result = getSortedCharacters('name', 'asc');
    expect(result).toEqual([
        { id: 2, name: 'Captain America', modified: '2023-01-02' },
        { id: 1, name: 'Iron Man', modified: '2023-01-01' },
        { id: 3, name: 'Thor', modified: '2023-01-03' }
    ]);
});

test('getSortedCharacters should sort characters by name in descending order', () => {
    const result = getSortedCharacters('name', 'desc');
    expect(result).toEqual([
        { id: 3, name: 'Thor', modified: '2023-01-03' },
        { id: 1, name: 'Iron Man', modified: '2023-01-01' },
        { id: 2, name: 'Captain America', modified: '2023-01-02' }
    ]);
});

test('getSortedCharacters should sort characters by modified date in ascending order', () => {
    const result = getSortedCharacters('modified', 'asc');
    expect(result).toEqual([
        { id: 1, name: 'Iron Man', modified: '2023-01-01' },
        { id: 2, name: 'Captain America', modified: '2023-01-02' },
        { id: 3, name: 'Thor', modified: '2023-01-03' }
    ]);
});

test('getSortedCharacters should sort characters by modified date in descending order', () => {
    const result = getSortedCharacters('modified', 'desc');
    expect(result).toEqual([
        { id: 3, name: 'Thor', modified: '2023-01-03' },
        { id: 2, name: 'Captain America', modified: '2023-01-02' },
        { id: 1, name: 'Iron Man', modified: '2023-01-01' }
    ]);
});