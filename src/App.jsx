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
import Alert from './Components/Alert';
export function showAlertFunc(setAlert) {
  return (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  };
}

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = showAlertFunc(setAlert);

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#02101d"
      showAlert('Dark mode Enabled', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert('Light mode Enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Header mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home mode={mode} setAlert={setAlert} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
