import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductForm handleProduct={handleProduct} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
