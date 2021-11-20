import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="ProductList" element={ <ProductsList /> }/>
      </Routes>
    </div>
  );
}

export default App;
