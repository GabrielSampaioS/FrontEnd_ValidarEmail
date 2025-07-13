//Componentes
import AllEmails from './Components/AllEmails'
import Formulario from './Components/Formulario'

import { useEffect, useState } from 'react'
  //const [count, setCount] = useState(0)
  const mockUsers = [
  { id: 1, name: "Ana Clara", email: "ana@example.com", validado: 0 },
  { id: 2, name: "João Pedro", email: "joao@example.com", validado: 0 },
  { id: 3, name: "Lucas Lima", email: "lucas@example.com", validado: 1 },
  { id: 4, name: "Mariana Souza", email: "mariana@example.com", validado: 0 },
  { id: 5, name: "Carlos Silva", email: "carlos@example.com", validado: 0 },
];

function App() {
  //const API_URL = process.env.REACT_APP_API_URL
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:433/api/emails")
    .then(res => res.json)
    .then(data => {
      if(Array.isArray(data)){
        setUsers(data)
      }else{
        console.error("ErroAqui: ", data)
        setUsers([])
      }
    })
  })


  return (
    <>
      <Formulario></Formulario>
      <AllEmails users={users}></AllEmails>
    </>
  )
}

export default App
