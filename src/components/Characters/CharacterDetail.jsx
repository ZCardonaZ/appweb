// components/Characters/CharacterDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = ({ characters }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar por índice numérico primero
    const foundCharacter = characters.find((char, index) => 
      index === parseInt(id)
    ) || 
    // Si no se encuentra por índice, buscar por ID (string o número)
    characters.find(char => char.id == id); // Usamos == en lugar de === para comparación flexible

    setCharacter(foundCharacter);
    setLoading(false);
  }, [id, characters]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!character) {
    return (
      <div className="error-message">
        <h2>Personaje no encontrado</h2>
        <Link to="/" className="back-button">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="character-detail">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h2>{character.name}</h2>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender || 'Desconocido'}</p>
        <p><strong>Estado:</strong> <span className={`status ${character.status?.toLowerCase()}`}>{character.status}</span></p>
        <p><strong>Planeta:</strong> {character.origin?.name || 'Desconocido'}</p>
        
        {/* Botón para volver */}
        <Link to="/" className="back-button">Volver al listado</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;