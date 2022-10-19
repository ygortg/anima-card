import React from 'react';
import { useState } from 'react';
import CardAnimal from './components/CardAnimal';
import CardInformacoes from './components/CardInformacoes';
import './App.css';

function App() {
  
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState('cachorro');

  const AlteraState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Aperte no botão abaixo para mudar os componentes.</p>
        <button onClick={AlteraState}>Mudar animal</button>
      </header>

      <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
      <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
    </div>
  );
}

export default App;
