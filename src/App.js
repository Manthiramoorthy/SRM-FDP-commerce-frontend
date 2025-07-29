import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ProductCard from './ProductCard';
import { useState } from "react";

function MyApp() {

  const products = [
    {
      title: "Product 1",
      description: "Product 1 description",
      imageUrl: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
    },
    {
      title: "Product 2",
      description: "Product 2 description",
      imageUrl: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
    },
    {
      title: "Product 3",
      description: "Product 3 description",
      imageUrl: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
    }
  ]
  console.log("My App is Rendered")
  let [count, setCount] = useState(0)
  function incrementClicked() {
    setCount(count + 1)
    console.log(count)
  }

  return (

    <div className="m-4">
      <button onClick={incrementClicked}>Increment</button>
      <h1>{count}</h1>

      {
        products.map(product =>
          <ProductCard title={product.title} description={product.description} imageurl={product.imageUrl} />
        )
      }
    </div>
  )


}
export default MyApp;
