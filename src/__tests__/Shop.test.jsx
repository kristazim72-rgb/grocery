// @vitest-environment jsdom
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Shop from '../Shop';

const mockProducts = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    price: 109.95,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Casual T-Shirt',
    price: 22.3,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
];

describe('Shop Component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders loading indicator initially and then displays fetched products', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Shop onAddToCart={() => {}} />);

    expect(screen.getByText(/loading fresh products/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Fjallraven Backpack')).toBeInTheDocument();
      expect(screen.getByText('Casual T-Shirt')).toBeInTheDocument();
    });
  });

  it('displays an error message when API call fails', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network Error'));

    render(<Shop onAddToCart={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText(/error loading products: network error/i)).toBeInTheDocument();
    });
  });
});