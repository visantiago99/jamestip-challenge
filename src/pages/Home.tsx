import React from 'react';
import { Link } from 'react-router-dom';
import Formulary from '../components/Formulary';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';


const Home = () => {

  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>Formulário</h1>
      <Formulary />
      <br />
      <Link to="/ProductList">
        <button type="button" className="plist-link">Lista de produtos</button>
      </Link>
    </div>
  );
}

export default Home;