// React Router v6 swapped Switch to Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
