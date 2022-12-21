import React from 'react';
import "./assets/css/noty.css"
import "./assets/css/metroui.css"
import "./assets/css/theme.css"

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Dashboard />} path='/'/>
      <Route element={<Dashboard />} path='/dashboard'/>
      </Routes></BrowserRouter>
  );
}

export default App;
