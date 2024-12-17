import "./UserDashboard.css"; // Import the CSS for styling

const UserDashboard = () => {
  // Replace these with actual data fetched from your backend or state management
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  };

  const bookings = [
    {
      id: 1,
      carName: "Toyota Camry",
      date: "2024-08-25",
      status: "Upcoming",
      isApproved: false,
    },
    // Add more booking items as needed
  ];

  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">User Dashboard</h1>

      {/* Personal Information Section */}
      <div className="personal-info-section">
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <button className="update-button">Update Profile</button>
      </div>

      {/* Booking History Section */}
      <div className="booking-history-section">
        <h2>Booking History</h2>
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <p>
                <strong>Car:</strong> {booking.carName}
              </p>
              <p>
                <strong>Booking Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
              {booking.status === "Upcoming" && (
                <button className="cancel-button">Cancel Booking</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
