import './App.css';
import React from 'react';
import Home from './Componets/pages/Home';
import Cardetails from './Componets/pages/Cardetails';
import Login from './Componets/pages/Login';
import Register from './Componets/pages/Register';
import Checkout from './Componets/pages/Checkout.js'
import Forget from './Componets/pages/Forget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/Login" element={<Login />} />
       <Route exact path="/Register" element={<Register/>} />
       <Route exact path="/Cardetails/:id" element={<Cardetails />} />
       <Route exact path="/Checkout" element={<Checkout />} />
       <Route exact path="/Forget" element={<Forget />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
