import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';

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
      </Routes>

    </div>
  );
}

export default App;
