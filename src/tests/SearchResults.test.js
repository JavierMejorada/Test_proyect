import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchResults from '@components/SearchResults';
import '@testing-library/jest-dom';

const mockSongs = [
  { id: 1, title: 'Canción 1', artist: 'Artista 1', album: 'Álbum 1' },
  { id: 2, title: 'Canción 2', artist: 'Artista 2', album: 'Álbum 2' },
];

test('La lista de canciones se renderiza correctamente', () => {
  render(<SearchResults results={mockSongs} />);
  const songTitles = screen.getAllByText(/Canción/i);
  expect(songTitles.length).toBe(2);
});

test('El botón "Agregar a mi biblioteca" ejecuta la función', () => {
  const mockAddToLibrary = jest.fn();
  render(<SearchResults results={mockSongs} onAdd={mockAddToLibrary} />);

  const buttons = screen.getAllByText(/Agregar/i);
  fireEvent.click(buttons[0]);

  expect(mockAddToLibrary).toHaveBeenCalledWith(mockSongs[0]);
});
