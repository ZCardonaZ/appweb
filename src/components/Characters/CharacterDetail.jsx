import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importa useParams y Link
import './CharacterDetail.css'; // Importa el CSS

function CharacterDetail() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://api.sampleapis.com/futurama/characters/${id}`); // Usa el ID para obtener el personaje
        if (!response.ok) {
          throw new Error('Error al obtener el personaje');
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]); // Dependencia en id para que se vuelva a cargar al cambiar el ID

  if (loading) {
    return <div className="loading">Cargando detalles del personaje...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!character) {
    return <div className="no-results">Personaje no encontrado</div>;
  }

  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last}`.trim();

  return (
    <div className="character-detail-container">
      <h1>{fullName}</h1>
      <div className="character-detail-image">
        <img
          src={character.images.main}
          alt={fullName}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300?text=No+Image';
          }}
        />
      </div>
      <div className="character-detail-info">
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Ocupación: {character.occupation}</p>
        {/* Agrega más detalles según la API */}
      </div>
      <Link to="/characters" className="back-to-characters">Volver a la lista</Link>
    </div>
  );
}

export default CharacterDetail;