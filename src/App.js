// importing Component
import { Component, Fragment } from "react";
import products from "./products";
import ProductCard from "./components/ProductCard";

// ProductCard declaring
function App() {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            ProductName={product.ProductName}
            price={product.price}
            description={product.description}
            imagePath={product.URL}
          />
        );
      })}
    </Fragment>
  );
}

export default App;
