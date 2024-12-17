import React, { useState } from "react";
import "./CheckoutPage.css";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";

const CheckoutPage = () => {
  const carUser = useAppSelector(selectCarUser);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(100); // Dummy total price

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon code");
    }
  };

  const handlePayment = async (method: string) => {
    const total = totalPrice - discount;

    if (!carUser || !carUser._id) {
      alert("User information is missing. Please log in.");
      return;
    }

    const paymentData = {
      userId: carUser._id,
      total,
      paymentMethod: method,
    };

    console.log("Sending Payment Data:", paymentData);
  };

  return (
    <div className="checkout-page">
      <h1 className="heading">Checkout</h1>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="coupon-input"
        />
        <button onClick={handleApplyCoupon} className="apply-coupon-btn">
          Apply Coupon
        </button>
      </div>

      <div className="summary-section">
        <p>Subtotal: ${totalPrice}</p>
        <p>Discount: ${discount}</p>
        <p>Total: ${totalPrice - discount}</p>
      </div>

      <div className="payment-section">
        <h2>Payment Methods</h2>
        <button
          onClick={() => handlePayment("Stripe")}
          className="payment-btn stripe"
        >
          Pay with Stripe
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
