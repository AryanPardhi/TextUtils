import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
