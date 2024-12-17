/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductListPage.css.css";
import { Layout, message } from "antd"; // Added Ant Design message for notifications
import Sidebar from "../../../../../PHForm/layout/Sidebar";
import NavbarUp from "../../NavbarUp/NavbarUp";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";

// Dummy data for products

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  console.log(product);

  const carUser = useAppSelector(selectCarUser);

  if (!product) {
    return <div>Product data not found!</div>; // Fallback if no product data is available
  }

  // Function to handle Add to Cart functionality
  const addProductOnCart = async (product: any) => {
    const payload = {
      userId: carUser?._id,
      productId: product._id,
      shopId: product.shopId,
      vendorId: product.vendorId,
      numberOfCounts: 1,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/cart/add-to-card",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart.");
      }

      const data = await response.json();
      message.success("Product added to cart successfully!");
      console.log("Server Response:", data);
      navigate("/home");
    } catch (error) {
      //console.error("Error:", error.message);
      message.error("Failed to add product to cart. Please try again.");
    }
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
              Category: {product.category || "N/A"}
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
              onClick={() => addProductOnCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
