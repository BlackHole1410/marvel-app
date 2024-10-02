import React from 'react';

export const NumberOfCharacters = ({ characters = [] }) => {
  return (
    <p>
      {characters && characters.length > 0
        ? `Total number of characters: ${characters.length}`
        : "Il n'y a pas de characters"}
    </p>
  );
};

