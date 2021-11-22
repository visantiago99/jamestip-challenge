import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import Footer from '../components/Footer';

export default function ProductsList() {
  const { productList } = useContext(ProductsContext)

  
  const localObj = JSON.parse(localStorage.getItem('productList') || "")
  console.log(localObj)
   
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ul>
        {productList.length > 0 ? productList.map((pdt, i) =><ProductCard {...pdt} index={i} />) : localObj.map((pdt: any, i: any) =><ProductCard {...pdt} index={i} />)}
      </ul>
      <br />
      <br />
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
      <Footer />
    </div>
  )
}
