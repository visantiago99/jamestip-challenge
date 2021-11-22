export interface productsItf {
  productId: string;
  category: string;
  name: string;
  suplierName: string;
  price: number;
}

export interface Products {
  productList: productsItf[]
  setProducts: (product: productsItf) => void
  editProducts: (PdtId: number, pdt: productsItf) => void
}

