// React Router v6 swapped Switch to Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Miscellaneous from './components/Home/Misc/Miscellaneous';
import Home from './components/Home/Root/Home';


function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Misc" element={ <Miscellaneous /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
