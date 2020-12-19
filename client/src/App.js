import React,{useState} from 'react'
import Login from './Components/Login';
const App = () => {
  const [id,setId] = useState()
  return (
  <> 
    <Login onIdSubmit={setId}/>
  </>
  )
}

export default App
