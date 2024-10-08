import React from 'react';
import { Link } from 'react-router-dom';

export const CharactersList = ({ characters = []}) => {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`}>
            {character.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};