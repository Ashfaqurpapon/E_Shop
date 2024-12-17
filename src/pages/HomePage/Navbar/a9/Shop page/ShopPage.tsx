import { Layout } from "antd";
import "./Shop_page.css"; // Import CSS for styling
import Sidebar from "../../../../../PHForm/layout/Sidebar";
import NavbarUp from "../../NavbarUp/NavbarUp";
import { useLocation } from "react-router-dom";

// Dummy data for vendor and products
const vendorDetails = {
  name: "John's Electronics Shop",
  description:
    "The best place for all your electronic needs. From gadgets to appliances, we have it all!",
  followers: 1200,
};

const dummyProducts = [
  {
    _id: "1",
    name: "Smartphone X",
    description: "A high-end smartphone with all the latest features.",
    image: "https://via.placeholder.com/150",
    price: 999.99,
    category: "Mobile Phones",
  },
  {
    _id: "2",
    name: "Smartwatch Pro",
    description: "Track your fitness and stay connected with this smartwatch.",
    image: "https://via.placeholder.com/150",
    price: 299.99,
    category: "Wearables",
  },
  {
    _id: "3",
    name: "Wireless Earbuds",
    description:
      "Experience true wireless freedom with superior sound quality.",
    image: "https://via.placeholder.com/150",
    price: 149.99,
    category: "Accessories",
  },
];

const ShopPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  console.log("hop");
  console.log(product.vendorId);

  return (
    <div className="vendor-shop-page">
      <div className="vendor-details">
        <h2 className="vendor-name">{vendorDetails.name}</h2>
        <p className="vendor-description">{vendorDetails.description}</p>
        <p className="vendor-followers">Followers: {vendorDetails.followers}</p>
        <button className="follow-btn">Following</button>
      </div>

      <div className="products-grid">
        {dummyProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
