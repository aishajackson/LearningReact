import React from "react"
import productsData from "./vschoolProducts"
import Product from './Product'

function App() {

	const ProductsComponent = productsData.map(products => <Product key = {products.id} item = {products} />)
  return (
    <div>
        {ProductsComponent}
    </div>
  )
}

export default App