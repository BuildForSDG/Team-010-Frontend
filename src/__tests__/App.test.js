import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Index test', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Log Into Your Account');
    expect(linkElement).toBeInTheDocument();
  });
});
