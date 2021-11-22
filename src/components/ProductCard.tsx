import React, { MouseEventHandler, useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { productsItf } from '../interfaces/ProductInterface';
import { Link } from 'react-router-dom';

interface propsChildren extends productsItf {
  index: number;
}


const ProductCard: React.FC <propsChildren> = ( {index, ...product} ) => {
  const { productList, editProducts, deleteProducts } = useContext(ProductsContext)
  const [showEdit, setShowEdit] = useState(false)
  const [inputEdit, setInputEdit] = useState<productsItf>({
      productId: "",
      category: "",
      name: "",
      suplierName: "",
      price: 0,
      })
  
  const buttonHandler = (): void => {
    setShowEdit(!showEdit)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputEdit({
      ...inputEdit,
      [e.target.name]: e.target.value
    })
  }


  const applyChange = () => {
    editProducts(index, 
      {
        productId: inputEdit.productId,
        category: inputEdit.category,
        name: inputEdit.name,
        suplierName: inputEdit.suplierName,
        price: inputEdit.price
      }
    )
    buttonHandler()
  }

  const deleteButton = (): MouseEventHandler<HTMLButtonElement> | undefined => {
    deleteProducts(index)
    return 
  }

  const renderForm = () => {
    return <div>
      <input type="text" placeholder="Código do Produto" name="productId" onChange={handleChange}  />
      <input type="text" placeholder="Categoria do Produto" name="category"  onChange={handleChange} />
      <input type="text" placeholder="Nome do Produto" name="name"  onChange={handleChange} />
      <input type="text" placeholder="Nome do Fornecedor" name="suplierName" onChange={handleChange}  />
      <input type="number" placeholder="Valor do Produto" name="price" onChange={handleChange}  />
      <Link to="/ProductList"><button type="button" onClick={applyChange}>apply</button></Link>
    </div>
  }

  if (showEdit) return renderForm()

  return (
    <div>
          <p>{product.productId}</p>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>{product.suplierName}</p>
          <p>{product.price}</p>
          <button type="button" onClick={buttonHandler}>editar</button>
          <button type="button" onClick={deleteButton}>delete</button>
    </div>
  )
}

export default ProductCard;