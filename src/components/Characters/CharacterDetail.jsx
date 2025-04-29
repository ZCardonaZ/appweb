import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.sampleapis.com/futurama/characters/${id}`);
        if (!response.ok) throw new Error('Personaje no encontrado');
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!character) return <div className="not-found">Personaje no encontrado</div>;

  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last || ''}`.trim();

  return (
    <div className="character-detail-container">
      <div className="character-detail">
        <div className="detail-image">
          <img 
            src={character.images?.main || 'https://via.placeholder.com/400x300?text=No+Image'} 
            alt={fullName}
          />
        </div>
        <div className="detail-info">
          <h1>{fullName}</h1>
          
          <div className="detail-section">
            <h2>Información</h2>
            <p><strong>Especie:</strong> {character.species || 'Desconocida'}</p>
            <p><strong>Género:</strong> {character.gender || 'Desconocido'}</p>
            <p><strong>Planeta:</strong> {character.homePlanet || 'Desconocido'}</p>
            <p><strong>Ocupación:</strong> {character.occupation || 'Desconocida'}</p>
          </div>

          {character.sayings && character.sayings.length > 0 && (
            <div className="detail-section">
              <h2>Frases célebres</h2>
              <ul className="sayings-list">
                {character.sayings.map((saying, index) => (
                  <li key={index}>{saying}</li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/characters" className="back-button">
            Volver al listado
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;