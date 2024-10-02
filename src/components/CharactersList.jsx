import React from 'react';

export const CharactersList = ({ characters = []}) => {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          {character.name}
        </li>
      ))}
    </ul>
  );
};