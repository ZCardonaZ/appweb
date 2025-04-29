import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('Todos'); // Nuevo estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');

        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }

        const data = await response.json();
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    let results = characters.filter(character =>
      character.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.name.last.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSpecies !== 'Todos') {
      results = results.filter(character => character.species === selectedSpecies);
    }

    setFilteredCharacters(results);
  }, [searchTerm, selectedSpecies, characters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value);
  };

  const uniqueSpecies = ['Todos', ...new Set(characters.map(character => character.species))]; // Obtener especies únicas

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="character-container">
      <h1>Personajes de Futurama</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <select value={selectedSpecies} onChange={handleSpeciesChange} className="species-select">  {/* Nuevo desplegable */}
          {uniqueSpecies.map(species => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>
      </div>

      {filteredCharacters.length === 0 ? (
        <div className="no-results">No se encontraron personajes con ese nombre</div>
      ) : (
        <div className="character-grid">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;