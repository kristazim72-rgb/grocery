import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Shopping Cart Application', () => {
  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Elevate Your Everyday Style/i)).toBeInTheDocument();
  });

  test('navigates to shop page through navbar', async () => {
    const user = userEvent.setup();
    render(<App />);

    const shopLink = screen.getByRole('link', { name: /shop/i });
    await user.click(shopLink);

    // Verifies layout transition
    expect(screen.getByRole('heading', { name: /catalog/i })).toBeInTheDocument();
  });
});