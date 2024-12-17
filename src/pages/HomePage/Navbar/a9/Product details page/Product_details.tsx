import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ProductListPage.css.css";
import { Layout } from "antd";
import Sidebar from "../../../../../PHForm/layout/Sidebar";
import NavbarUp from "../../NavbarUp/NavbarUp";

// Dummy data for products
const dummyProducts = [
  {
    _id: "1",
    name: "Product 1",
    description: "This is a detailed description of Product 1.",
    image: "https://via.placeholder.com/150",
    price: 99.99,
    category: "Electronics",
    reviews: [
      { user: "John Doe", rating: 5, comment: "Amazing product!" },
      { user: "Jane Smith", rating: 4, comment: "Very good quality." },
    ],
  },
  {
    _id: "2",
    name: "Product 2",
    description: "This is a detailed description of Product 2.",
    image: "https://via.placeholder.com/150",
    price: 49.99,
    category: "Home Appliances",
    reviews: [
      { user: "Alice Brown", rating: 4, comment: "Works as expected." },
      { user: "Bob White", rating: 3, comment: "Decent for the price." },
    ],
  },
];

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  //console.log("product");
  // console.log(product);

  if (!product) {
    return <div>Product data not found!</div>; // Fallback if no product data is available
  }
  const goToShopPage = (product: any) => {
    //console.log(product);

    navigate("/ShopPage", { state: { product } });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />

      <NavbarUp />
      <div className="product-details-page">
        <h1 className="product-title">{product.productName}</h1>
        <div className="product-container">
          <img
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <p className="product-category">
              Category: {product.Category || "N/A"}
            </p>
            <p className="product-description">
              {product.detailsDescription || "No description available."}
            </p>
            <p className="product-price">Price: ${product.price || "0.00"}</p>
            <div className="product-reviews">
              <h3>Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review: any, index: number) => (
                  <div key={index} className="review-item">
                    <p>
                      <strong>{review.user}:</strong> {review.comment}
                    </p>
                    <p>Rating: {"⭐".repeat(review.rating)}</p>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => goToShopPage(product)}
            >
              Shop Name
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
