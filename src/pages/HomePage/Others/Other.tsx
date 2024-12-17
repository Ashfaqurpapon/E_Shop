import "./Other.css"; // Import the CSS file

const Others = () => {
  return (
    <>
      <div className="others-container">
        {/* Banner Section */}
        <div className="banner">
          <img
            src="./banner-image.jpg"
            alt="Cars Banner"
            className="banner-image"
          />
          <div className="banner-content">
            <h1 className="banner-title">Find Your Perfect Ride</h1>
            <button className="book-now-button">Book Now</button>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="search-bar-container">
          <h2 className="search-title">Check Car Availability</h2>
          <form className="search-bar">
            <input
              type="text"
              placeholder="Enter location"
              className="search-input"
            />
            <input type="date" className="search-input" />
            <input type="date" className="search-input" />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Others;
