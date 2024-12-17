import { useState } from "react";
import "./CheckoutPage.css";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";

import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const carUser = useAppSelector(selectCarUser);
  const [couponCode, setCouponCode] = useState("");
  const location = useLocation();
  const { totalPrice } = location.state;
  const [discount, setDiscount] = useState(0);
  console.log(totalPrice);

  //const [totalPrice, setTotalPrice] = useState(100); // Dummy total price

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

    initiatePayment(paymentData.userId);
  };

  // TODO LIMON : this function is not good. we should send reqeust through redux api
  const initiatePayment = async (userId: string) => {
    const requestBody = {
      // Replace with the actual payload expected by your API
      shopId: "675d5835463eefa480524993",
      vendorId: "675d5835463eefa480524993",
      TotalAmount: totalPrice,
      NumberOfProducts: 2,
      // currency: "USD",
      // description: "Payment for Order #12345",
    };

    try {
      const response = await fetch(
        `https://productsweb.vercel.app/api/payment/initiatePayment/${userId}`,
        {
          method: "POST", // POST request
          headers: {
            "Content-Type": "application/json",
            // Add authorization headers if needed, e.g., "Authorization": "Bearer YOUR_TOKEN"
          },
          body: JSON.stringify(requestBody), // Convert the payload to JSON
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      window.location.href = data.data.payment_url;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
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
