import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');
        
        if (!response.ok) throw new Error('Error al obtener los personajes');
        
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
    const results = characters.filter(character => {
      const nameMatch = 
        character.name?.first?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.name?.last?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const speciesMatch = 
        selectedSpecies === 'all' || 
        character.species?.toLowerCase() === selectedSpecies.toLowerCase();
      
      return nameMatch && speciesMatch;
    });
    
    setFilteredCharacters(results);
  }, [searchTerm, selectedSpecies, characters]);

  // Obtener especies únicas
  const speciesOptions = ['all', ...new Set(
    characters.map(char => char.species).filter(Boolean)
  )];

  if (loading) return <div className="loading">Cargando personajes...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="character-container">
      <h1>Personajes de Futurama</h1>
      
      <div className="filters-container">
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <select
          value={selectedSpecies}
          onChange={(e) => setSelectedSpecies(e.target.value)}
          className="species-filter"
          aria-label="Filtrar por especie"
        >
          {speciesOptions.map(species => (
            <option key={species} value={species}>
              {species === 'all' ? 'Todas las especies' : species}
            </option>
          ))}
        </select>
      </div>
      
      <div className="character-grid">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div className="no-results">No se encontraron personajes</div>
        )}
      </div>
    </div>
  );
}

export default CharacterList;