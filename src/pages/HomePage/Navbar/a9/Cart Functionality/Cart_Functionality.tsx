/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./Cart_Functionality.css";
import Sidebar from "../../../../../PHForm/layout/Sidebar";
import NavbarUp from "../../NavbarUp/NavbarUp";
import { Layout, message } from "antd";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";
import { useNavigate } from "react-router-dom";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const carUser = useAppSelector(selectCarUser);
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch cart items for the current user
  const fetchCartItems = async () => {
    if (!carUser?._id) return;

    try {
      const response = await fetch(
        `http://localhost:8000/api/cart/get-All-userAddedProducts/${carUser._id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      console.log("cart");
      //console.log(data);

      // Transform the response into CartProduct format
      const transformedCart = data.data.map((item: any) => ({
        id: item._id, // Cart entry ID
        name: item.productId.productName, // Product name
        price: item.productId.price, // Product price
        quantity: item.numberOfCounts, // Quantity
        imageUrl: item.productId.imageUrl, // Product image
      }));
      console.log(transformedCart);

      setCart(transformedCart);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      message.error("Failed to load cart items. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [carUser]);

  // Calculate total cost
  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const totalPrice = calculateTotal().toFixed(2);

  const goToCheckOutPage = (totalPrice: any) => {
    navigate("/CheckOut", {
      state: { totalPrice },
    });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <NavbarUp />
      <div className="cart-container">
        <h1 className="cart-heading">Your Cart</h1>

        {loading ? (
          <p>Loading cart items...</p>
        ) : cart.length > 0 ? (
          <>
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h2 className="cart-item-name">{product.name}</h2>
                    <p className="cart-item-price">Price: ${product.price}</p>
                    <p className="cart-item-quantity">
                      Quantity: {product.quantity}
                    </p>
                    <p className="cart-item-total">
                      Subtotal: ${product.price * product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total Cost: ${totalPrice}</h2>
              <button
                className="checkout-button"
                onClick={() => goToCheckOutPage(totalPrice)}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
