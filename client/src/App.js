import React from 'react'
import Login from './Components/Login';
import useLocalStorage from './hooks/useLocalStorage';
const App = () => {
  const [id,setId] = useLocalStorage()
  return (
  <> 
    <Login onIdSubmit={setId}/>
  </>
  )
}

export default App
