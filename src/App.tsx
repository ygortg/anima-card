import React from 'react';
import { useState } from 'react';
import CardAnimal from './components/CardAnimal';
import CardInformacoes from './components/CardInformacoes';
import imagemCachorro from "./assets/cachorro.jpg";
import imagemGato from "./assets/gato.jpg";
import './App.css';

function App() {
  
  let imagemAnimal = ' ';
  let informacaoAnimal = ' ';
  let tipoAnimal = 'Cachorro';

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState('cachorro');

  const AlteraState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  }

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato"
  }


  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Aperte no botão abaixo para mudar os componentes.</p>
        <button onClick={AlteraState}>Mudar animal</button>
      </header>

      <CardAnimal imagemAnimal={imagemAnimal}/>
      <CardInformacoes tipoAnimal={tipoAnimal} informacaoAnimal={informacaoAnimal}/>
    </div>
  );
}

export default App;
