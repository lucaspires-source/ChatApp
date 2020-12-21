import React from 'react'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider'
import{ConversationsProvider} from './contexts/ConversationsProvider'
import { SocketProvider } from '../contexts/SocketProvider';
const App = () => {
  const [id,setId] = useLocalStorage('id')
  const dashboard = (
    <SocketProvider>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>  
      </ContactsProvider>
    </SocketProvider>
  )
  return (
  <> 
    {id ? dashboard: <Login onIdSubmit={setId}/>}
 
  </>
  )
}

export default App
