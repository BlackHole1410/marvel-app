import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', () => {
    it('renders without crashing', () => {
        const character = { name: 'Spider-Man', description: 'A superhero in New York', thumbnail: { path: 'path/to/image', extension: 'jpg' }, modified: '2023-01-01' };
        render(<CharacterDetail character={character} />);
    });

    it('displays the character image with correct src and alt attributes', () => {
        const character = { name: 'Spider-Man', thumbnail: { path: 'path/to/image', extension: 'jpg' } };
        render(<CharacterDetail character={character} />);
        const img = screen.getByRole('img');
        expect(img.src).toContain('path/to/image/standard_large.jpg');
        expect(img.alt).toBe('Spider-Man');
    });

    it('displays the character description', () => {
        const character = { description: 'A superhero in New York' };
        render(<CharacterDetail character={character} />);
        const description = screen.getByText('A superhero in New York');
        expect(description).toBeTruthy();
    });

    it('displays "No description available." when description is not provided', () => {
        const character = {};
        render(<CharacterDetail character={character} />);
        const description = screen.getByText('No description available.');
        expect(description).toBeTruthy();
    });

    it('displays the character modification date', () => {
        const character = { modified: '2023-01-01' };
        render(<CharacterDetail character={character} />);
        const modified = screen.getByText('2023-01-01');
        expect(modified).toBeTruthy();
    });

    it('displays "No modification date available." when modification date is not provided', () => {
        const character = {};
        render(<CharacterDetail character={character} />);
        const modified = screen.getByText('No modification date available.');
        expect(modified).toBeTruthy();
    });
});