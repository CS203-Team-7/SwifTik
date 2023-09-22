import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
