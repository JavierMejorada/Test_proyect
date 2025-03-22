import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@components/Header';
import '@testing-library/jest-dom';

test('El título de la aplicación se muestra correctamente', () => {
  render(<Header />);
  const title = screen.getByText(/Biblioteca Musical/i);
  expect(title).toBeInTheDocument();
});

test('No se muestra contenido adicional', () => {
  render(<Header />);
  const extraContent = screen.queryByText(/Contenido Inexistente/i);
  expect(extraContent).not.toBeInTheDocument();
});
