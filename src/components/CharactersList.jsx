import React from 'react';
import { Link } from 'react-router-dom';
import DateFormat from './DateFormat';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                        <strong>{character.name}</strong> - <small>{character.modified ? <DateFormat isoDate={character.modified} /> : 'Invalid Date'}</small>
                    </Link>
                </li>
            ))}
        </ul>
    );
}