import './App.css';
import React,  { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { LoginContext } from './context/loginContext'

function App() {

  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isUserLogin, setIsUserLogin }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
    </BrowserRouter>
    </LoginContext.Provider>
    
  );
}

export default App;
