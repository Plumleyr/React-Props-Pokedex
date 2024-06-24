import PropTypes from 'prop-types';
import './Pokecard.css'

const Pokecard = ({id, name, type, exp}) => {
    return (
    <div className='pokecard-pokemon'>
        <ul>
            <li key={id}>
                <p className='pokecard-name'>{name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
                <p>Type: {type}</p>
                <p>Exp: {exp}</p>
            </li>
        </ul>
    </div>
    );
};

Pokecard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    exp: PropTypes.number.isRequired,
  };

export default Pokecard