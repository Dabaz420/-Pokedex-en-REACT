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
    })

    useEffect(() => { 
        if (pokemons[params.id-1] && evolutions.length === 0) {
            dispatch(getEvolution(pokemons[params.id-1].species.url));
        }
    })
    
    function displayEvolutions(){
        switch (pokemons[params.id-1].name) {
            case "eevee": 
                return(
                    <div className="pokemon-evolution">
                        <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[133].id}>
                            Evolution 1 : {evolutions[1]}
                        </Link>
                        <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[134].id}>
                            Evolution 2 : {evolutions[2]}
                        </Link>
                        <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[135].id}>
                            Evolution 3 : {evolutions[3]}
                        </Link>
                    </div>
                )

            case evolutions[0]:
                if (evolutions[1] === pokemons[params.id].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}>
                                Evolution  : {evolutions[1]}
                            </Link>
                        </div>
                    )
                } else {
                    return(
                        <div className="pokemon-evolution">
                            <p>Evolution  : None</p>
                        </div>
                    )  
                }

            case evolutions[1]:
                if (evolutions[1] === "vaporeon") {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}>
                                Involution  : {evolutions[0]}
                            </Link>
                        </div>
                    )
                } else if (evolutions[2] === pokemons[params.id].name && evolutions[0] === pokemons[params.id-2].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}>
                                Involution  : {evolutions[0]}
                            </Link>
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}>
                                Evolution  : {evolutions[2]}
                            </Link>
                        </div>
                    )
                } else if(evolutions[0] === pokemons[params.id-2].name){
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}>
                                Involution  : {evolutions[0]}
                            </Link>
                        </div>
                    )
                } else if(evolutions[2] === pokemons[params.id].name){
                    return(
                        <div className="pokemon-evolution">    
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id].id}>
                                Evolution  : {evolutions[2]}
                            </Link>
                        </div>
                    )
                } else {
                    return(
                        <div className="pokemon-evolution">
                            <p>Evolution  : None</p>
                        </div>
                    )  
                }
        
            default:
                if (evolutions[2] === "jolteon" && evolutions[2] === pokemons[params.id - 1].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-3].id}>
                                Involution  : {evolutions[0]}
                            </Link>
                        </div>
                    )
                } else if (evolutions[3] === "flareon" && evolutions[3] === pokemons[params.id - 1].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-4].id}>
                                Involution  : {evolutions[0]}
                            </Link>
                        </div>
                    )
                } else if (pokemons[params.id-2] && evolutions[1] === pokemons[params.id-2].name) {
                    return(
                        <div className="pokemon-evolution">
                            <Link to={"/-Pokedex-en-REACT/Infos/" + pokemons[params.id-2].id}>
                                Involution  : {evolutions[1]}
                            </Link>
                        </div>
                    )
                } else {
                    return(
                        <div className="pokemon-evolution">
                            <p>Evolution  : None</p>
                        </div>
                    )  
                }
        }
    }

    return (
        <>
            {pokemons.length === 151 &&
                <div className="pokemon-infos" key={uuidv4()}>
                    <div className="pokemon-presentation">
                        <h1>{pokemons[params.id-1].name}</h1>
                        <img className="pokemon-img" src={pokemons[params.id-1].sprites.other["official-artwork"].front_default} alt={pokemons[params.id-1].name} />
                    </div>
                    <div className="pokemon-description">
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
                            <div className="pokemon-weightAndHeight">
                                <p> Weight : {pokemons[params.id-1].weight/10} kg </p>
                                <p> Height : {pokemons[params.id-1].height/10} m </p>
                            </div>
                            {displayEvolutions()}
                        </div>
                        <div className="pokemon-stats">
                            <p className="base-stat">Base Stats :</p>
                            {pokemons[params.id-1].stats.map(item => {
                                if (item.stat.name === "special-defense") {
                                    return(
                                        <p key={uuidv4()} className={item.stat.name}>sp.defense : {item.base_stat}</p> 
                                    )
                                } else if(item.stat.name === "special-attack"){
                                    return(
                                        <p key={uuidv4()} className={item.stat.name}>sp.attack : {item.base_stat}</p> 
                                    )
                                } else {
                                    return(
                                        <p key={uuidv4()} className={item.stat.name}>{item.stat.name} : {item.base_stat}</p> 
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            }  
        </>
    )
}
