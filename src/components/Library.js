import React from 'react';

const Library = ({ library, onRemove }) => {
    return (
      <div>
        <h2>Mi Biblioteca</h2>
        {library.length === 0 ? (
          <p>No hay canciones en tu biblioteca.</p>
        ) : (
          <ul>
            {library.map((song, index) => (
              <li key={index} data-testid="library-item"> {}
                {song.title} - {song.artist} ({song.album})
                <button onClick={() => onRemove(song)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Library;