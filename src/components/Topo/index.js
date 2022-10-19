import React from "react";
import './style.css';


export default function Topo(props) {
  return(
    <header>
      <h1>Projeto Props + useState</h1>
      <p>Aperte no botão abaixo para mudar os componentes.</p>
      <button onClick={props.clickAlterarAnimal}>Mudar animal</button>
  </header>
  );
}