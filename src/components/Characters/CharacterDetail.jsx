// CharacterDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://api.sampleapis.com/futurama/characters/${id}`);
        if (!response.ok) throw new Error('Personaje no encontrado');
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!character) return <div>Personaje no encontrado</div>;

  // Formatea el nombre completo
  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last}`.trim();

  return (
    <div className="character-detail">
      <div className="character-image">
        <img 
          src={character.images.main} 
          alt={fullName}
          onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=No+Image'}
        />
      </div>
      <div className="character-info">
        <h2>{fullName}</h2>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender || 'Desconocido'}</p>
        <p><strong>Planeta:</strong> {character.homePlanet || 'Desconocido'}</p>
        <Link to="/" className="back-button">Volver al listado</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;