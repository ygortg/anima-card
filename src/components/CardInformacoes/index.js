import React from "react";
import './style.css';

export default function CardInformacoes(props) {
  let nomeAnimalCachorro = "Cachorro";
  let nomeAnimalGato = "Gato";
  let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
  let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";
  return(
    <div className="CardInformacoes">
        <h3>
          informação sobre o {props.tipoAnimal == "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}
        </h3>
        <p>
          {props.tipoAnimal == "cachorro" ? informacaoCachorro : informacaoGato}
        </p>
    </div>
  );
}