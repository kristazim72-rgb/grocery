// @vitest-environment jsdom
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { describe, test, expect, afterEach } from 'vitest';

describe('Shopping Cart Application', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Discover Your/i)).toBeInTheDocument();
  });

  test('navigates to shop page through navbar', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Select the navbar link specifically
    const shopLink = screen.getAllByRole('link', { name: /^shop$/i })[0];
    await user.click(shopLink);

    // Asynchronously verify navigation to the Shop page
    expect(await screen.findByText(/(fresh products|our products)/i)).toBeInTheDocument();
  });
});