import React from 'react';
import { Link } from 'react-router-dom';
import Formulary from '../components/Formulary';


const Home = () => {

  
  return (
    <div>
      <h1>Formulário</h1>
      <Formulary />
      <br />
      <Link to="/ProductList">
        <button type="button">Lista de produtos</button>
      </Link>
    </div>
  );
}

export default Home;