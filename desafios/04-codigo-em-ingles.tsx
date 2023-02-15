// Código em inglês
import { useState } from 'react'

interface Product {
  title: string
  price: string
}

const productList = [
  {
    title: 'Pasta',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProduct(searchedProduct: string) {
    const filteredProduct = productList.filter((product) =>
      product.title.includes(searchedProduct)
    )

    setFilteredProducts(filteredProduct)
  }

  return (
    <div>
      <input type='text' onChange={(e) => searchProduct(e.target.value)} />

      {filteredProducts.map((product: Product) => (
        <div key={product.title}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
