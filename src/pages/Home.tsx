import React from 'react';
import { Link } from 'react-router-dom';
import Formulary from '../components/Formulary';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import Footer from '../components/Footer';


const Home = () => {

  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>Adicionar produto ao sistema</h1>
      <Formulary />
      <br />
      <Link to="/ProductList">
        <button type="button" className="plist-link btn-info">Lista de produtos</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;