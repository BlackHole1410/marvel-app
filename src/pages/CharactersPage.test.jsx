import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharactersPage from './CharactersPage';
import { getSortedCharacters } from '../api/characters-api';

jest.mock('../api/characters-api', () => ({
    getSortedCharacters: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
    useNavigate: jest.fn(),
}));

describe('CharactersPage', () => {
    const mockNavigate = jest.fn();
    const mockCharacters = [
        { id: 1, name: 'Iron Man', modified: '2021-01-01' },
        { id: 2, name: 'Spider-Man', modified: '2021-02-01' },
    ];

    beforeEach(() => {
        require('react-router-dom').useLoaderData.mockReturnValue(mockCharacters);
        require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
        getSortedCharacters.mockReturnValue(mockCharacters);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders correctly with initial state', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Marvel Characters')).toBeInTheDocument();
        expect(screen.getByLabelText('Sort by:')).toHaveValue('name');
        expect(screen.getByLabelText('Order:')).toHaveValue('asc');
    });

    test('calls getSortedCharacters with correct parameters', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        expect(getSortedCharacters).toHaveBeenCalledWith('name', 'asc');
    });

    test('updates URL and state when sort by is changed', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Sort by:'), { target: { value: 'modified' } });

        expect(mockNavigate).toHaveBeenCalledWith('?sortBy=modified&order=asc');
        expect(getSortedCharacters).toHaveBeenCalledWith('modified', 'asc');
    });

    test('updates URL and state when order is changed', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Order:'), { target: { value: 'desc' } });

        expect(mockNavigate).toHaveBeenCalledWith('?sortBy=name&order=desc');
        expect(getSortedCharacters).toHaveBeenCalledWith('name', 'desc');
    });
});