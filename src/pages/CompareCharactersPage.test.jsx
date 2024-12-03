import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import { getCharacters } from '../api/characters-api';

jest.mock('../api/characters-api');

const mockCharacters = [
    { name: 'Captain America' },
    { name: 'Beast' },
    { name: 'Iron Man' },
    { name: 'Thor' },
];

describe('CompareCharactersPage', () => {
    beforeEach(() => {
        getCharacters.mockResolvedValue(mockCharacters);
    });

    test('renders CompareCharactersPage and sets default options', async () => {
        render(<CompareCharactersPage />);

        await waitFor(() => {
            expect(screen.getByText('Compare characters')).toBeTruthy();
            expect(screen.getByText('Captain America vs Beast')).toBeTruthy();
        });
    });

    test('renders character options in select elements', async () => {
        render(<CompareCharactersPage />);

        await waitFor(() => {
            const select1 = screen.getByTestId('select-character-1');
            const select2 = screen.getByTestId('select-character-2');

            expect(select1).toBeTruthy();
            expect(select2).toBeTruthy();

            mockCharacters.forEach((character, index) => {
                expect(select1.options[index].text).toBe(character.name);
                expect(select2.options[index].text).toBe(character.name);
            });
        });
    });

    test('changes characters properly when new options are selected', async () => {
        render(<CompareCharactersPage />);

        await waitFor(() => {
            expect(screen.getByText('Captain America vs Beast')).toBeTruthy();
        });

        const select1 = screen.getByTestId('select-character-1');
        const select2 = screen.getByTestId('select-character-2');

        fireEvent.change(select1, { target: { value: '2' } }); // Select Iron Man
        fireEvent.change(select2, { target: { value: '3' } }); // Select Thor

        await waitFor(() => {
            expect(screen.getByText('Iron Man vs Thor')).toBeTruthy();
        });
    });
});