import React from 'react';
import imagemCachorro from '../../assets/cachorro.jpg'
import imagemGato from '../../assets/gato.jpg';
import './style.css';

export default function CardAnimal(props) {
  return(
    <div className='CardAnimal'>
      <img src={props.tipoAnimal === "cachorro" ? imagemCachorro : imagemGato} alt="Animal"/>
    </div>
  );
}