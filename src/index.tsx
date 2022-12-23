import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./assets/css/theme.css"
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/css/custom.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


