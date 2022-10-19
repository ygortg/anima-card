import React from 'react';
import { useState } from 'react';
import Topo from './components/Topo';
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
      <Topo clickAlterarAnimal={AlteraState}/>
      <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
      <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
    </div>
  );
}

export default App;
