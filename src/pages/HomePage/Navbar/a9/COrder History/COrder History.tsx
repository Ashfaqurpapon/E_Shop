import React from "react";
import "./COrder History.css";

const dummyCustomerOrders = [
  {
    id: 101,
    items: [
      { name: "Product X", quantity: 1, price: 100 },
      { name: "Product Y", quantity: 2, price: 50 },
    ],
    total: 200,
    date: "2024-12-05",
    status: "Delivered",
  },
  {
    id: 102,
    items: [{ name: "Product Z", quantity: 1, price: 150 }],
    total: 150,
    date: "2024-12-04",
    status: "Shipped",
  },
  {
    id: 103,
    items: [
      { name: "Product A", quantity: 3, price: 30 },
      { name: "Product B", quantity: 1, price: 25 },
    ],
    total: 115,
    date: "2024-12-03",
    status: "Pending",
  },
];

const COrderHistory = () => {
  return (
    <div className="order-history">
      <h1 className="heading">My Order History</h1>

      <div className="order-list">
        {dummyCustomerOrders.map((order) => (
          <div key={order.id} className="order-card">
            <h2 className="order-id">Order ID: {order.id}</h2>
            <p className="order-date">Date: {order.date}</p>
            <p className={`order-status ${order.status.toLowerCase()}`}>
              Status: {order.status}
            </p>

            <div className="order-items">
              <h3>Items:</h3>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index} className="order-item">
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
            </div>

            <p className="order-total">Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default COrderHistory;
