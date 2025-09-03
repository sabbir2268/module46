import React, { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    console.log(name, price, quantity); //this will provide solid value

    // validation
    if (name.length === 0) {
      setError("Name is required");
      return;
    }
    if (price.length === 0) {
      setError("Price is required");
      return;
    }
    if (quantity.length === 0) {
      setError("Quantity is required");
      return;
    } else {
      setError("");
    }
    // now make it an object
    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(productDetails);

    handleProduct(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="price" placeholder="price" />
        <input type="text" name="quantity" placeholder="quantity" />
        <input type="submit" value="submit" />
      </form>
      <p className="text-red-400">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
