import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharactersList } from './CharactersList';

describe('CharactersList', () => {
    test('renders an empty list when no characters are provided', () => {
        const { container } = render(
            <Router>
                <CharactersList characters={[]} />
            </Router>
        );
        const list = container.querySelector('#characters');
        expect(list.children.length).toBe(0);
    });

    test('renders a list of characters', () => {
        const characters = [
            { id: 1, name: 'Character 1' },
            { id: 2, name: 'Character 2' },
        ];
        const { getByText } = render(
            <Router>
                <CharactersList characters={characters} />
            </Router>
        );

        characters.forEach(character => {
            const linkElement = getByText(character.name);
            expect(linkElement).toBeTruthy();
            expect(linkElement.closest('a').getAttribute('href')).toBe(`/characters/${character.id}`);
        });
    });

    test('renders character names correctly', () => {
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Thor' },
        ];
        const { getByText } = render(
            <Router>
                <CharactersList characters={characters} />
            </Router>
        );

        characters.forEach(character => {
            const linkElement = getByText(character.name);
            expect(linkElement.textContent).toBe(character.name);
        });
    });

    test('applies correct styles to links', () => {
        const characters = [
            { id: 1, name: 'Spider-Man' },
            { id: 2, name: 'Hulk' },
        ];
        const { getByText } = render(
            <Router>
                <CharactersList characters={characters} />
            </Router>
        );

        characters.forEach(character => {
            const linkElement = getByText(character.name);
            const linkStyle = window.getComputedStyle(linkElement.closest('a'));
            expect(linkStyle.color).toBe('rgb(51, 51, 51)');
            expect(linkStyle.textDecoration).toBe('none');
        });
    });
});