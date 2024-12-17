/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";
import "./COrder History.css";
// Order interface
interface Order {
  isPaid: boolean;
  _id: string;
  userId: string;
  shopId: string;
  vendorId: string;
  NumberOfProducts: number;
  TotalAmount: number;
  createdAt: string;
  updatedAt: string;
}

const COrderHistory = () => {
  const carUser = useAppSelector(selectCarUser);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchOrderHistory = async () => {
    try {
      const response = await fetch(
        `https://productsweb.vercel.app/api/orderHistory/get-user-full-OrderHistory/${carUser?._id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data.data);
    } catch (err: any) {
      setError("Unable to fetch orders. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (carUser?._id) fetchOrderHistory();
  }, [carUser]);

  return (
    <div className="order-history-container">
      <h1>Order History</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : orders.length === 0 ? (
        <p className="error">No orders found.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <p className="order-id">Order ID: {order._id}</p>
              <p>Number of Products: {order.NumberOfProducts}</p>
              <p className="order-total">Total Amount: ${order.TotalAmount}</p>
              <p className="order-date">
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className={`order-paid ${order.isPaid ? "" : "unpaid"}`}>
                Status: {order.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default COrderHistory;
