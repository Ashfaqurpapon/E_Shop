import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CreateAProduct.css";

const CreateAProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { shopId, vendorId } = location.state || {};

  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [formData, setFormData] = useState({
    shopId: shopId,
    vendorId: vendorId,
    productCategory: "",
    productName: "",
    imageUrl: "",
    price: "",
    detailsDescription: "",
    numberOFRatings: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch product categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://productsweb.vercel.app/api/productCategory"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        console.log(data.data);

        setCategories(data.data);

        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, productCategory: data[0]._id }));
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load product categories.");
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch(
        "https://productsweb.vercel.app/api/product/create-product",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/home");
      } else {
        throw new Error(data.message || "Failed to create shop.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-shop-container">
      <h2>Create Shop and Add Product</h2>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="create-shop-form">
        <div className="form-group">
          <label htmlFor="productCategory">Product Category:</label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="detailsDescription">Details Description:</label>
          <textarea
            id="detailsDescription"
            name="detailsDescription"
            value={formData.detailsDescription}
            onChange={handleChange}
            placeholder="Enter product details (optional)"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="numberOFRatings">Number of Ratings:</label>
          <input
            type="number"
            id="numberOFRatings"
            name="numberOFRatings"
            value={formData.numberOFRatings}
            onChange={handleChange}
            placeholder="Enter number of ratings"
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateAProduct;
