import logo from '../logo.gif';
import '../Home.css';
import { useState } from 'react'

import HelloWorld from '../components/HelloWorld.js';
import SayMyName from '../components/SayMyName';
import Pessoa from '../components/Pessoa';
import List from '../components/List';
import Evento from '../components/Evento';
import Form from '../components/Form';
import Condicional from '../components/Condicional';
import OutraLista from '../components/OustraLista';
import SeuNome from '../components/SeuNome';
import Saudacao from '../components/Saudacao';


function calcidade(nasc) {
  const ano = new Date()
  const hoje = ano.getFullYear()
  const idade = Number(hoje) - Number(nasc)
  return idade

}

const rcbNome = "Mateus"
const nnome = rcbNome[0].toUpperCase() + rcbNome.substring(1)


function Home() {


  const [nome, setNome] = useState();

  const meusItens = ['PC', 'TV', 'Console']
  const outrosItens = []

  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2 className="txtTitulo">Projeto React.</h2>
        <HelloWorld />
        <SayMyName nome={nome} />
        <Pessoa
          foto='https://cdn-icons-png.flaticon.com/512/21/21104.png'
          nome={nnome}
          idade={calcidade(1999)}
          profissao='Programador'
        />
        <List />


        <h1>Testando Eventos</h1>
        <Evento numero="1" />


        <Form />

        <Condicional />

        <OutraLista itens={meusItens} />
        <OutraLista itens={outrosItens} />

        <SeuNome setNome={setNome} />
        <Saudacao nome={nome}/>

      </header>

    </div>

   
  );
}

export default Home;
