import React from 'react';
import ReactDOM from 'react-dom';
// React Router v6 swapped Switch to Routes


import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

        <Routes>
          {/* App is the Whole Screen (root) */}
        <Route path="/" element={ <App /> } />
        </Routes>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


