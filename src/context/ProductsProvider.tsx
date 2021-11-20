import  ProductsContext, {DEFAULT_VALUE}  from "./ProductsContext";
import React, { useState } from 'react';
import {productsItf} from '../interfaces/ProductInterface';


export const  ProductsProvider: React.FC  = ({ children }) => {
  const [productList, setProductList] = useState<productsItf[]>(DEFAULT_VALUE.productList);

  const setProducts = (pdt: productsItf) => {
    setProductList((productList) => [...productList, pdt])
  }

  // const obj = {products, setProducts}

  return (
    <ProductsContext.Provider value={{productList, setProducts}}  >
      {children}
    </ProductsContext.Provider>
  );
}