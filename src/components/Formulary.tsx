import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { productsItf } from '../interfaces/ProductInterface';
import GlobalStyle from '../styles/global';

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
      return 
    }
    const localObj = JSON.parse(localStorage.getItem('productList') || "")
    let result = [...localObj, input]
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
    <div className="formulary mb-3">
      <GlobalStyle />
      <input className="form-control" type="text" placeholder="Código do Produto" name="productId" onChange={handleChange} value={input.productId} />
      <input className="form-control" type="text" placeholder="Categoria do Produto" name="category" onChange={handleChange} value={input.category} />
      <input className="form-control" type="text" placeholder="Nome do Produto" name="name" onChange={handleChange} value={input.name} />
      <input className="form-control" type="text" placeholder="Nome do Fornecedor" name="suplierName" onChange={handleChange} value={input.suplierName} />
      <input className="form-control"type="number" placeholder="Valor do Produto" name="price" onChange={handleChange}  />
      <button type="button" className="btn-info" onClick={handleClick}>Adicionar produto</button>
    </div>
  )
}
