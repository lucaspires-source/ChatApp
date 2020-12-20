import React from 'react'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider'
import{ConversationsProvider} from './contexts/ConversationsProvider'
const App = () => {
  const [id,setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>  
    </ContactsProvider>
  )
  return (
  <> 
    {id ? dashboard: <Login onIdSubmit={setId}/>}
 
  </>
  )
}

export default App
