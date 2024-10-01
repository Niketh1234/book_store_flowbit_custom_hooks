import "./ShowProducts.css";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import LoadingButtonSpinner from "../Loaders/LoadingButtonSpinner";

const ShowProducts = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products, loading, error } = useFetch(url);
  return (
    <>
      <div className="buttonContainer">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All Products
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          Products in stock
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?_sort=price")}
        >
          Sort by Price
        </button>
      </div>

      <div className="productContainer">
        {loading && <LoadingButtonSpinner />}
        {error && <p>{error}</p>}
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              in_stock={product.in_stock}
            />
          ))}
      </div>
    </>
  );
};

export default ShowProducts;
