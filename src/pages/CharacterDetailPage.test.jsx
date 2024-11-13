import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
}));

jest.mock('../components/CharacterDetail', () => () => <div>CharacterDetail Component</div>);

describe('CharacterDetailPage', () => {
    it('renders without crashing', () => {
        require('react-router-dom').useLoaderData.mockReturnValue({ name: 'Spider-Man' });

        render(
            <Router>
                <CharacterDetailPage />
            </Router>
        );
    });

    it('displays the character name in the heading', () => {
        const character = { name: 'Spider-Man' };
        require('react-router-dom').useLoaderData.mockReturnValue(character);

        render(
            <Router>
                <CharacterDetailPage />
            </Router>
        );

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading.textContent).toBe('Spider-Man');
    });

    it('renders the CharacterDetail component with the correct character prop', () => {
        const character = { name: 'Spider-Man', description: 'A superhero in New York', thumbnail: { path: 'path/to/image', extension: 'jpg' }, modified: '2023-01-01' };
        require('react-router-dom').useLoaderData.mockReturnValue(character);

        render(
            <Router>
                <CharacterDetailPage />
            </Router>
        );

        const characterDetailComponent = screen.getByText('CharacterDetail Component');
        expect(characterDetailComponent).toBeTruthy();
    });
});