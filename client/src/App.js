import React from 'react'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider'
const App = () => {
  const [id,setId] = useLocalStorage()
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )
  return (
  <> 
    {id ? dashboard: <Login onIdSubmit={setId}/>}
 
  </>
  )
}

export default App
