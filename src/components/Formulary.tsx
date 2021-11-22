import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { productsItf } from '../interfaces/ProductInterface';

// module StorageHelper {
//   export interface IStorageItem {
//       key: string;
//       value: any;
//   }

//   export class StorageItem {
//       key: string;
//       value: any;

//       constructor(data: IStorageItem) {
//           this.key = data.key;
//           this.value = data.value;
//       }
//   }

//   // class for working with local storage in browser (common that can use other classes for store some data)
//   export class LocalStorageWorker {
//       localStorageSupported: boolean;

//       constructor() {
//           this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
//       }

//       // add value to storage
//       add(key: string, item: string) {
//           if (this.localStorageSupported) {
//               localStorage.setItem(key, item);
//           }
//       }

//       // get all values from storage (all items)
//       getAllItems(): Array<StorageItem> {
//           var list = new Array<StorageItem>();

//           for (var i = 0; i < localStorage.length; i++) {
//               var key = localStorage.key(i);
//               var value = localStorage.getItem(key);

//               list.push(new StorageItem({
//                   key: key,
//                   value: value
//               }));
//           }

//           return list;
//       }

export default function Formulary() {
  const [input, setInput] = useState<productsItf>({
  productId: "",
  category: "",
  name: "",
  suplierName: "",
  price: 0,
  })

  const { productList, setProducts } = useContext(ProductsContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const setLocalStorage = () => {
    console.log(productList.length >= 1)
    if (!localStorage.productList && input) {
      localStorage.setItem('productList', JSON.stringify([input]))
    }
    const localObj = JSON.parse(localStorage.getItem('productList') || "")
    let result = [...localObj, ...productList]
    localStorage.setItem('productList', JSON.stringify(result))
  }

  const handleClick = (): void => {
    setProducts(
      {
        productId: input.productId,
        category: input.category,
        name: input.name,
        suplierName: input.suplierName,
        price: input.price
      }
    )
    setLocalStorage()
  }

  
  return (
    <div>
      <input type="text" placeholder="Código do Produto" name="productId" onChange={handleChange} value={input.productId} />
      <input type="text" placeholder="Categoria do Produto" name="category" onChange={handleChange} value={input.category} />
      <input type="text" placeholder="Nome do Produto" name="name" onChange={handleChange} value={input.name} />
      <input type="text" placeholder="Nome do Fornecedor" name="suplierName" onChange={handleChange} value={input.suplierName} />
      <input type="number" placeholder="Valor do Produto" name="price" onChange={handleChange}  />
      <button type="button" onClick={handleClick}>Adicionar produto</button>
    </div>
  )
}
