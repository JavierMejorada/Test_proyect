import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from '@components/SearchBar';
import '@testing-library/jest-dom'; 

test('El input de búsqueda se renderiza correctamente', () => {
  render(<SearchBar />);
  const input = screen.getByPlaceholderText(/Buscar canciones.../i);
  expect(input).toBeInTheDocument();
});

test('El usuario puede escribir en el input', () => {
  render(<SearchBar />);
  const input = screen.getByPlaceholderText(/Buscar canciones.../i);
  fireEvent.change(input, { target: { value: 'Rock' } });
  expect(input.value).toBe('Rock');
});

test('La función de búsqueda se ejecuta al hacer clic en el botón', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);
  
  const input = screen.getByPlaceholderText(/Buscar canciones.../i);
  fireEvent.change(input, { target: { value: 'Pop' } });

  const button = screen.getByText(/Buscar/i);
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith('Pop');
});
