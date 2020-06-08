import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Index test', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const h2 = getByText(/Log Into Your Account/i);
    expect(h2).toBeInTheDocument();
  });
});
