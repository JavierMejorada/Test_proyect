import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

test('La aplicación renderiza los componentes principales', () => {
  render(<App />);
  
  expect(screen.getByText(/Biblioteca Musical/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Buscar canciones.../i)).toBeInTheDocument();
});

test('Simula agregar una canción a la biblioteca', async () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText(/Buscar canciones.../i);
  fireEvent.change(input, { target: { value: 'Nueva Canción' } });

  const searchButton = screen.getByText(/Buscar/i);
  fireEvent.click(searchButton);

  const addButtons = screen.getAllByText(/Agregar a mi biblioteca/i);
  const addButton = addButtons[0]; // Selecciona el primer botón
  fireEvent.click(addButton);

  // Verifica que "Nueva Canción" esté en la biblioteca usando data-testid
  expect(await screen.findByTestId('library-item')).toBeInTheDocument();
});