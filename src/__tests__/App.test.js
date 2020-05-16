import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
=======
import App from '../app';
>>>>>>> More Work on market page

describe('Index test', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Log Into Your Account/i);
    expect(linkElement).toBeInTheDocument();
  });
});
