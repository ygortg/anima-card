import React from 'react';
import './style.css';

export default function CardAnimal(props) {
  return(
    <div className='CardAnimal'>
      <img src={props.imagemAnimal} alt="Animal"/>
    </div>
  );
}