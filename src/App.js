import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ProductCard from './product/ProductCard';
import { useEffect, useState } from "react";

function MyApp() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://srm-fdp-commerce-backend-wprz.onrender.com/list')
      .then((response) => response.json())
      .then((data) => setProducts(data))
    console.log("Api called")
  }, [])


  console.log("My App is Rendered")

  const [count, setCount] = useState(0)
  function incrementClicked() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div className="m-4">
      <button onClick={incrementClicked}>Increment</button>
      <h1>{count}</h1>
      <div className="row justify-content-center">
        {
          products.map(product =>
            <ProductCard title={product.title} description={product.description} imageurl={product.thumbnail} />
          )
        }
      </div>
    </div>
  )


}
export default MyApp;
