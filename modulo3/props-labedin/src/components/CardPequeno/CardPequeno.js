import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallCard">
            <img src={ props.imagem } />
            <p> {props.link} </p>
           
        </div>
    )
}

export default CardPequeno;