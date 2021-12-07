import React from 'react'
import { Link } from 'react-router-dom'
import Home from './home.svg'
import { unsetInfos } from '../../redux/pokemons/infosReducer'
import { unsetEvolution } from '../../redux/pokemons/evolutionReducer'
import { useDispatch } from 'react-redux'
import './BtnAccueil.css'

export default function BtnAccueil() {
    const dispatch = useDispatch()
    return (
        <>
           <Link 
                className="link-home" 
                to="/-Pokedex-en-REACT" 
                onClick={() => {
                    dispatch(unsetInfos())
                    dispatch(unsetEvolution())
                }}
            >
               <img className="img-home" src={Home} alt="home" />
           </Link> 
        </>
    )
}
