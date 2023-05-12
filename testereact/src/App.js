import './App.css';
import { Input } from './Componentes/Input'
import { Users } from './Componentes/Users'
import { useState } from 'react'

export const App = () => {
  const [lista, setLista] = useState([])

  function handleSaveUser(usuario) {
    let newLista = [...lista]
    newLista.push(usuario)
    setLista(newLista)

  }

  return ( 
    <div>
      <h1>Teste Input</h1>
     <Input onAddUser={handleSaveUser}/>
      <Users lista = {lista}/>
    </div>

  )
}

