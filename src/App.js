//import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path='/about' element={<About mode={mode}/>}>
          </Route>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try Text Analyzer - Word, Text Counter" mode={mode}/>}>
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}




export default App;