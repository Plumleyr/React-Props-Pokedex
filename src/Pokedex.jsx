import Pokecard from './Pokecard.jsx'
import './Pokedex.css'
import pokemonData from './pokemonData.json'

const Pokedex = () => {
    return(
        <div className='pokemonCard'>
            {pokemonData.map(p => (
                <Pokecard 
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
            ))}
        </div>
    )
}

export default Pokedex