import React from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPokemons } from '../../redux/pokemons/pokemonReducer'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import Card from '../../Component/Card/Card'
import { unsetEvolution } from '../../redux/pokemons/evolutionReducer'

export default function Home() {

    const {pokemons,evolutions} = useSelector(state => ({
        ...state.pokemonReducer,
        ...state.evolutionReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if(pokemons.length === 0){
            dispatch(getPokemons());
        }

        if (evolutions.length !== 0) {
            dispatch(unsetEvolution());
        }
    })

    return (
        <>
            <h1 className='home-title'>Le Pokedex en REACT</h1>
            <div className='container-pokemon'>
            {pokemons.length === 151 ?
                pokemons.map(item => {
                    return(
                        <Link className="card-link" id={item.id} key={uuidv4()} to={{
                                pathname: `Infos/${item.id}`
                            }}
                        >
                            <div className="start">
                                <div className='id-pokemon'>#{item.id}</div>
                                <Card >
                                    <h4 className='card-title'>{item.species.name}</h4>
                                    <img src={item.sprites.front_default} alt={item.species.name} />
                                </Card>
                            </div>
                            <div className='stats'>
                                <p className="base-stat">Base Stats :</p>
                                {item.stats.map(item => {
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
                        </Link>
                    )
                }) : <h2 className="charging">Charging...</h2>}
            </div>
        </>
    )
}