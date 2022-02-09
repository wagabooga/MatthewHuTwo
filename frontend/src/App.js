// React Router v6 swapped Switch to Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
          <Route path="/Manatee" element={ <Manatee /> } />
          <Route path="/Narwhal" element={ <Narwhal /> } />
          <Route path="/Whale" element={ <Whale /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
