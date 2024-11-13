import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders without crashing', () => {
    render(<AboutPage />);
  });

  it('sets the document title to "About | Marvel App"', () => {
    render(<AboutPage />);
    expect(document.title).toBe("About | Marvel App");
  });});