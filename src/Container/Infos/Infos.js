import React from 'react'
import './Infos.css'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPokemons } from '../../redux/pokemons/pokemonReducer'
import { Link } from 'react-router-dom'
import { getEvolution } from '../../redux/pokemons/evolutionReducer'
import {v4 as uuidv4} from 'uuid'

export default function Infos() {

    const params = useParams();
    
    const {evolutions,pokemons} = useSelector(state => ({
        ...state.evolutionReducer,
        ...state.pokemonReducer
    }))    
    
    const dispatch = useDispatch()
    
    useEffect(() => { 
        if(pokemons.length === 0){
            dispatch(getPokemons());
        }
    }, [])

    useEffect(() => { 
        if (pokemons[params.id-1] && evolutions.length === 0) {
            dispatch(getEvolution(pokemons[params.id-1].species.url));
        }
    }, [])

    function tabEvolutions(){
        switch (pokemons[params.id-1].name) {
            case evolutions[0]:
                if (evolutions[1] === pokemons[params.id].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}
                                state={params.id}
                            >
                                Evolution  : {evolutions[1]}
                            </Link>
                        </div>
                    )
                }
            break;

            case evolutions[1]:
                if (evolutions[2] === pokemons[params.id].name && evolutions[0] === pokemons[params.id-2].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}
                                state={params.id}
                            >
                                Involution  : {evolutions[0]}
                            </Link>
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}
                                state={params.id}
                            >
                                Evolution  : {evolutions[2]}
                            </Link>
                        </div>
                    )
                } else if(evolutions[0] === pokemons[params.id-2].name){
                    return(
                        <div className="pokemon-evolution">
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}
                                state={params.id}
                            >
                                Involution  : {evolutions[0]}
                            </Link>
                        </div>
                    )
                } else {
                    return(
                        <div className="pokemon-evolution">    
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}
                                state={params.id}
                            >
                                Evolution  : {evolutions[2]}
                            </Link>
                        </div>
                    )
                }
        
            default:
                if (evolutions[1] === pokemons[params.id-2].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link 
                                to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}
                                state={params.id}
                            >
                                Involution  : {evolutions[1]}
                            </Link>
                        </div>
                    )
                }
            break;
        }
    }

    return (
        <>
            {pokemons.length === 151 &&
                <div className="infos-pokemon" key={uuidv4()}>
                <h1>{pokemons[params.id-1].name}</h1>
                <img className="pokemon-img" src={pokemons[params.id-1].sprites.other["official-artwork"].front_default} alt={pokemons[params.id-1].name} />
                <div className="pokemon-size">
                    <div className="pokemon-types">
                        <p>Type(s) :</p>
                        <ul>
                            {pokemons[params.id-1].types.map(item => {
                                return(
                                    <li key={uuidv4()} className="pokemon-type">{item.type.name}</li> 
                                    )
                                })}
                        </ul>
                    </div>
                    <p>
                        Weight : {pokemons[params.id-1].weight/10} kg
                        <br/>
                        Height : {pokemons[params.id-1].height/10} m
                    </p>
                </div>
                {evolutions.length > 0 && tabEvolutions()}
            </div>
            }  
        </>
    )
}
