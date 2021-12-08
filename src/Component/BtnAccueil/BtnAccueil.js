import React from 'react'
import { Link } from 'react-router-dom'
import Home from './home.svg'
import './BtnAccueil.css'

export default function BtnAccueil() {
    return (
        <>
           <Link 
                className="link-home" 
                to="/-Pokedex-en-REACT" 
            >
               <img className="img-home" src={Home} alt="home" />
           </Link> 
        </>
    )
}
