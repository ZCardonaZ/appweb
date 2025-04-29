// components/Characters/CharacterCard.jsx
import { Link } from "react-router-dom";

const CharacterCard = ({ character, index }) => {
  // Formatea el nombre completo como en tu versión
  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last}`.trim();
  
  return (
    <Link 
      to={`/characters/${index}`} 
      className="character-card"
      aria-label={`Ver detalles de ${fullName}`}
    >
      <div className="character-image">
        <img 
          src={character.images.main} 
          alt={fullName}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
          }}
        />
      </div>
      <div className="character-info">
        <h2>{fullName}</h2>
        <p>Especie: {character.species}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;