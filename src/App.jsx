import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Textbody from './Components/Textbody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Header/>
      <Textbody />
    </>
  )
}

export default App
