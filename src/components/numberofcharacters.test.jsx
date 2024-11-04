// FILEPATH: /c:/Dev logiciel web/S5/Marvel-app/marvel-app/src/components/__tests__/numberofcharacters.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberOfCharacters } from './numberofcharacters';

describe('NumberOfCharacters Component', () => {
  test('renders correctly with no characters', () => {
    const { getByText } = render(<NumberOfCharacters characters={[]} />);
    expect(getByText('There is no character')).toBeInTheDocument();
  });

  test('renders correctly with one character', () => {
    const { getByText } = render(<NumberOfCharacters characters={['Spider-Man']} />);
    expect(getByText('There is 1 character')).toBeInTheDocument();
  });

  test('renders correctly with multiple characters', () => {
    const { getByText } = render(<NumberOfCharacters characters={['Spider-Man', 'Iron Man']} />);
    expect(getByText('There is 2 characters')).toBeInTheDocument();
  });
});