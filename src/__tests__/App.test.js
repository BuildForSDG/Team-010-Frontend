import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Index test', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/The No.1 online platform for connecting farmers and buyers/i);
    expect(h1).toBeInTheDocument();
  });
});
