import "./VOrder History.css";

const dummyOrders = [
  {
    id: 1,
    customer: "John Doe",
    items: [
      { name: "Product A", quantity: 2, price: 20 },
      { name: "Product B", quantity: 1, price: 10 },
    ],
    total: 50,
    date: "2024-12-01",
  },
  {
    id: 2,
    customer: "Jane Smith",
    items: [{ name: "Product C", quantity: 3, price: 15 }],
    total: 45,
    date: "2024-12-02",
  },
  {
    id: 3,
    customer: "Alice Johnson",
    items: [
      { name: "Product D", quantity: 1, price: 25 },
      { name: "Product E", quantity: 2, price: 30 },
    ],
    total: 85,
    date: "2024-12-03",
  },
];

const VOrderHistory = () => {
  return (
    <div className="order-history">
      <h1 className="heading">Order History</h1>

      <div className="order-list">
        {dummyOrders.map((order) => (
          <div key={order.id} className="order-card">
            <h2 className="order-id">Order ID: {order.id}</h2>
            <p className="customer-name">Customer: {order.customer}</p>
            <p className="order-date">Date: {order.date}</p>

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

export default VOrderHistory;
