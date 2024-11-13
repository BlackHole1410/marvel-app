import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders without crashing', () => {
    render(<ContactPage />);
  });

  it('sets the document title to "Contact | Marvel App"', () => {
    render(<ContactPage />);
    expect(document.title).toBe("Contact | Marvel App");
  });

    it('renders the heading "Contact Us"', () => {
        render(<ContactPage />);
        const heading = screen.getByRole('heading', { level: 2, name: 'Contact Us' });
        expect(heading.textContent).toBe('Contact Us');
    });

    it('renders the paragraph with correct text', () => {
        render(<ContactPage />);
        const paragraph = screen.getByText(/Feel free to contact us at/);
        expect(paragraph.textContent).toContain('Feel free to contact us at');
    });

    it('renders the email link with correct href', () => {
        render(<ContactPage />);
        const link = screen.getByRole('link', { name: /marvelApp@gmail.com/ });
        expect(link.getAttribute('href')).toBe('mailto:marvelApp@gmail.com');
    });

    it('renders the email link with correct text', () => {
        render(<ContactPage />);
        const link = screen.getByRole('link', { name: /marvelApp@gmail.com/ });
        expect(link.textContent).toBe(' marvelApp@gmail.com');
    });
});