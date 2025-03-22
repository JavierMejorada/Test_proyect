import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Library from './Library';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [library, setLibrary] = useState([]);

  const handleSearch = (query) => {
    // Simulación de resultados de búsqueda basados en el query
    const results = [
      { title: 'Canción 1', artist: 'Artista 1', album: 'Álbum 1' },
      { title: 'Canción 2', artist: 'Artista 2', album: 'Álbum 2' },
      { title: 'Nueva Canción', artist: 'Nuevo Artista', album: 'Nuevo Álbum' }, 
    ].filter((song) => song.title.toLowerCase().includes(query.toLowerCase()));

    setSearchResults(results);
  };

  const handleAddToLibrary = (song) => {
    setLibrary([...library, song]);
  };

  const handleRemoveFromLibrary = (song) => {
    setLibrary(library.filter((item) => item !== song));
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} onAdd={handleAddToLibrary} />
      <Library library={library} onRemove={handleRemoveFromLibrary} />
    </div>
  );
};

export default App;