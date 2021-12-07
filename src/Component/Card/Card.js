import React from 'react'
import './Card.css'
//alternative-card
export default function Card(props) {
    return (
        <div className="card"> 
            {props.children}
        </div>
    )
}
