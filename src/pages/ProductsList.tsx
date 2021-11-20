import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import { Link } from 'react-router-dom';


export default function ProductsList() {
  const { productList } = useContext(ProductsContext)
  
  
  
  return (
    <div>
      <ul>
        {productList.map((pdt) => <li>
          <p>{pdt.productId}</p>
          <p>{pdt.category}</p>
          <p>{pdt.name}</p>
          <p>{pdt.suplierName}</p>
          <p>{pdt.price}</p>
        </li>)}
      </ul>
      <br />
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </div>
  )
}
