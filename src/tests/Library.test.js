import React from 'react';
import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Library from '@components/Library';


const mockLibrary = [
  { id: 1, title: 'Canción Guardada', artist: 'Artista Guardado', album: 'Álbum Guardado' }
];

test('La lista de canciones de la biblioteca se muestra correctamente', () => {
  render(<Library library={mockLibrary} />);
  const songTitle = screen.getByText(/Canción Guardada/i);
  expect(songTitle).toBeInTheDocument();
});

test('El botón "Eliminar" ejecuta la función', () => {
  const mockRemove = jest.fn();
  render(<Library library={mockLibrary} onRemove={mockRemove} />);

  const button = screen.getByText(/Eliminar/i);
  fireEvent.click(button);

  expect(mockRemove).toHaveBeenCalledWith(mockLibrary[0]);
});

test('La biblioteca vacía muestra un mensaje', () => {
  render(<Library library={[]} />);
  const emptyMessage = screen.getByText(/No hay canciones en tu biblioteca/i);
  expect(emptyMessage).toBeInTheDocument();
});
