/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./CreateAShop.css";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectCarUser } from "../../../../../redux/features/carAuthSlice";
import { useNavigate } from "react-router-dom";

const CreateAShop = () => {
  const carUser = useAppSelector(selectCarUser);
  const navigate = useNavigate();

  const [shopName, setShopName] = useState("Elegant Crafts Ltd.");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const payload = {
      shopName,
      vendorId: carUser?._id,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/shop/create-shop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/vendor/create-product", {
          state: { shopId: data.data._id, vendorId: carUser?._id },
        });
      } else {
        throw new Error(data.message || "Shop created successfully!");
      }
    } catch (err) {
      throw new Error("Shop created successfully!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-shop-container">
      <h2>Create a Shop</h2>

      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="create-shop-form">
        <div className="form-group">
          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Enter shop name"
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Creating..." : "Create Shop"}
        </button>
      </form>
    </div>
  );
};

export default CreateAShop;
