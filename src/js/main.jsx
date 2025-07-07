import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// index.css'
import '../styles/index.css'


// components
import {App} from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
