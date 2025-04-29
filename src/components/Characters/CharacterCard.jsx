import { Link } from "react-router-dom";
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last || ''}`.trim();
  
  return (
    <div className="character-card">
      <Link 
        to={`/characters/${character.id}`} 
        className="card-link"
        aria-label={`Ver detalles de ${fullName}`}
      >
        <div className="character-image">
          <img 
            src={character.images?.main || 'https://via.placeholder.com/300x200?text=No+Image'} 
            alt={fullName}
            loading="lazy"
          />
        </div>
        <div className="character-info">
          <h2>{fullName}</h2>
          <p className="species">{character.species || 'Especie desconocida'}</p>
          {character.gender && <p className="gender">{character.gender}</p>}
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;