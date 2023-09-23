import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {

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
