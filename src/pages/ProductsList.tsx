import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

export default function ProductsList() {
  const { productList } = useContext(ProductsContext)
  
  
  return (
    <div>
      <ul>
        {productList.map((pdt, i) =><ProductCard {...pdt} index={i} />)}
      </ul>
      <br />
      <br />
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </div>
  )
}
