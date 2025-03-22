import React from 'react';

const SearchResults = ({ results, onAdd }) => {
  return (
    <div>
      <h2>Resultados de búsqueda</h2>
      <ul>
        {results.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist} ({song.album})
            <button onClick={() => onAdd(song)}>Agregar a mi biblioteca</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
