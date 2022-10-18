import React from "react";
import './style.css';

export default function CardInformacoes(props) {
  return(
    <div className="CardInformacoes">
        <h3>
          informação sobre o {props.tipoAnimal}
        </h3>
        <p>
          {props.informacaoAnimal}
        </p>
    </div>
  );
}