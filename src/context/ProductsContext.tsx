import { createContext } from 'react';
import {Products} from '../interfaces/ProductInterface';

export const DEFAULT_VALUE: Products = {
  productList: [],
  setProducts: () => {}
}

// const contextDefaultValues: TodosContextState = {
//   todos: [],
//   addTodo: () => {}
// };

// export const TodosContext = createContext<TodosContextState>(
//   contextDefaultValues
// );

const ProductsContext = createContext<Products>(DEFAULT_VALUE)

export default ProductsContext;