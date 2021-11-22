import React, { MouseEventHandler, useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { productsItf } from '../interfaces/ProductInterface';
import { Link } from 'react-router-dom';

interface propsChildren extends productsItf {
  index: number;
}


const ProductCard: React.FC <propsChildren> = ( {index, ...product} ) => {
  const { editProducts, deleteProducts } = useContext(ProductsContext)
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
    return <div className="formulary mb-3">
      <input className="form-control" type="text" placeholder="Código do Produto" name="productId" onChange={handleChange}  />
      <input className="form-control" type="text" placeholder="Categoria do Produto" name="category"  onChange={handleChange} />
      <input className="form-control" type="text" placeholder="Nome do Produto" name="name"  onChange={handleChange} />
      <input className="form-control" type="text" placeholder="Nome do Fornecedor" name="suplierName" onChange={handleChange}  />
      <input className="form-control" type="number" placeholder="Valor do Produto" name="price" onChange={handleChange}  />
      <Link to="/ProductList"><button type="button" onClick={applyChange}>apply</button></Link>
    </div>
  }

  if (showEdit) return renderForm()

  return (
    <div className="card card-style">
      <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">ID do produto: {product.productId} | Categoria: {product.category}</h6>
          <h6>{product.suplierName}</h6>
          <h6>{product.price}</h6>
          <button className="btn-warning" type="button" onClick={buttonHandler}>editar</button>
          <button className="btn-danger" type="button" onClick={deleteButton}>deletar</button>
      </div>
    </div>
  )
}

export default ProductCard;