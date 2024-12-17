import React, { useState } from "react";
import "./Cart_Functionality.css";
import Sidebar from "../../../../../PHForm/layout/Sidebar";
import NavbarUp from "../../NavbarUp/NavbarUp";
import { Layout } from "antd";
const dummyCartProducts = [
  { id: 1, name: "Product A", price: 15, quantity: 2 },
  { id: 2, name: "Product B", price: 25, quantity: 1 },
  { id: 3, name: "Product C", price: 20, quantity: 3 },
];

const Cart = () => {
  const [cart, setCart] = useState(dummyCartProducts);

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <NavbarUp />
      <div className="cart-container">
        <h1 className="cart-heading">Your Cart</h1>

        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h2 className="cart-item-name">{product.name}</h2>
              <p className="cart-item-price">Price: ${product.price}</p>
              <p className="cart-item-quantity">Quantity: {product.quantity}</p>
              <p className="cart-item-total">
                Subtotal: ${product.price * product.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total Cost: ${calculateTotal()}</h2>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
