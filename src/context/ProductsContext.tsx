import { createContext } from 'react';
import {Products} from '../interfaces/ProductInterface';

export const DEFAULT_VALUE: Products = {
  productList: [],
  setProducts: () => {},
  editProducts: () => {},
  deleteProducts: () => {},
}

const ProductsContext = createContext<Products>(DEFAULT_VALUE)

export default ProductsContext;