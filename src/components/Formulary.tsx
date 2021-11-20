import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { productsItf } from '../interfaces/ProductInterface';

export default function Formulary() {
  const [input, setInput] = useState<productsItf>({
  productId: "",
  category: "",
  name: "",
  suplierName: "",
  price: 0,
  })

  const { setProducts } = useContext(ProductsContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
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