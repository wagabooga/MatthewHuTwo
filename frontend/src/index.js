import React from 'react';
import ReactDOM from 'react-dom';
// React Router v6 swapped Switch to Routes


import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Miscellaneous from './components/RightPanel/Misc/Miscellaneous';
import RightPanel from './components/RightPanel/RightPanel';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
        <Routes>
        <Route path="/" element={ <RightPanel /> } />
        <Route path="/Misc" element={ <Miscellaneous /> } />

        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


