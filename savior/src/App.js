import './App.css';
import { Form } from './Login/Form';
import { Users } from './Login/Users'
import {useState} from 'react'

export const App = () => {
  const [lista, setLista] = useState([])

  function handleAddUser(usuario) {
    let novaLista = [...lista]
    novaLista.push(usuario)
    setLista(novaLista)

  }

  return (
    <div className={'App-header'}>
      <Form onAddUser={handleAddUser}/>
      <Users lista={lista}></Users>
    </div>
  )
}
