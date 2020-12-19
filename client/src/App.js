import React from 'react'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import useLocalStorage from './hooks/useLocalStorage';
const App = () => {
  const [id,setId] = useLocalStorage()
  return (
  <> 
    {id ? <Dashboard id={id} />: <Login onIdSubmit={setId}/>}
 
  </>
  )
}

export default App
