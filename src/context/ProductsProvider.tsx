import  ProductsContext, {DEFAULT_VALUE}  from "./ProductsContext";
import React, { useState } from 'react';
import {productsItf} from '../interfaces/ProductInterface';


export const  ProductsProvider: React.FC  = ({ children }) => {
  const [productList, setProductList] = useState<productsItf[]>(DEFAULT_VALUE.productList);

  const setProducts = (pdt: productsItf) => {
    setProductList((productList) => [...productList, pdt])
  }

  const editProducts = (PdtId: number, pdt: productsItf) => {
    const pdtFilter = productList.map((p, i) => {
      if (i === PdtId) {
        return pdt
      }
      return p
    })
    setProductList([...pdtFilter])
    localStorage.setItem('productList', JSON.stringify([...pdtFilter]))
  }

  const deleteProducts = (PdtId: number) => {
    const remove = productList.filter((p, i) => i !== PdtId)
    setProductList([...remove])
  }

  return (
    <ProductsContext.Provider value={{productList, setProducts, editProducts, deleteProducts}}  >
      {children}
    </ProductsContext.Provider>
  );
}