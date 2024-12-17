/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./Home_page.css";
import { useGetAllCarsQuery } from "../../../../../redux/api/CarManagemntApi/carManagementApi";

import { useNavigate } from "react-router-dom";
import { CarTypes } from "../../../../../types/CarTypes";
import pic from "./1.jpg";

// const addToCart = async (
//   userId: any,
//   productId: string,
//   shopId: string,
//   vendorId: string,
//   numberOfCounts: number
// ) => {
//   // console.log(userId);
//   // console.log(productId);
//   // console.log(shopId);
//   // console.log(vendorId);
//   // console.log(numberOfCounts);

//   try {
//     const response = await fetch("http://localhost:8000/api/cart/add-to-card", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId,
//         productId,
//         shopId,
//         vendorId,
//         numberOfCounts,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to add to cart");
//     }

//     const data = await response.json();
//     console.log("Added to cart:", data);
//     return data;
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     return null;
//   }
// };
// export interface CarType {
//   _id: string;
//   productName: string;
//   price: number;
//   detailsDescription: string;
//   imageUrl: string;
//   productCategory: string;
//   shopId: string;
//   vendorId: string;
//   numberOFRatings: number;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

const HomePage = () => {
  const navigate = useNavigate();
  const { data: carsData } = useGetAllCarsQuery(undefined);
  console.log(carsData);

  //const carUser = useAppSelector(selectCarUser);
  //console.log(carUser);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [filteredProducts, setFilteredProducts] = useState<CarTypes[]>([]);

  const filterProducts = () => {
    if (!carsData?.data) return;

    const filtered = carsData.data;
    console.log("filtered");
    console.log(filtered);

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchKeyword, priceRange, carsData]);

  const goToProductDetails = (product: any) => {
    //console.log(product);

    navigate("/product-details", { state: { product } });
  };

  // const handleAddToCart = async (product: any) => {
  //   if (!carUser) {
  //     navigate("/carSignIn");
  //     return;
  //   }
  //   const { _id: productId, shopId, vendorId } = product;
  //   const userId = carUser?._id; // Replace with actual user ID
  //   const numberOfCounts = 1; // Default count
  //   console.log(product);

  //   const result = await addToCart(
  //     userId,
  //     productId,
  //     shopId,
  //     vendorId,
  //     numberOfCounts
  //   );
  //   //console.log(result);

  //   if (result) {
  //     alert(`${product.productName} added to cart successfully!`);
  //   } else {
  //     alert(`Failed to add ${product.productName} to cart.`);
  //   }
  // };

  return (
    <div className="home-page">
      <div className="filter-box">
        <input
          type="text"
          placeholder="Search by keyword"
          className="search-input"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <div className="price-range">
          <label>
            Min Price:
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: Number(e.target.value) })
              }
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: Number(e.target.value) })
              }
            />
          </label>
        </div>

        <div className="category-box">
          {["Category 1", "Category 2", "Category 3"].map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product: any) => (
          <div key={product._id} className="product-card">
            <img
              src={pic}
              alt={product.productName}
              className="product-image"
            />
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-vendor">Vendor: {product.vendorId}</p>
            {/* <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button> */}
            <button
              className="product_details_button"
              onClick={() => goToProductDetails(product)}
            >
              Product Details Page
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
