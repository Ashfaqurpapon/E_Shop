import { Layout } from "antd";
import Sidebar from "../../PHForm/layout/Sidebar";
import NavbarUp from "../HomePage/Navbar/NavbarUp/NavbarUp";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <NavbarUp />
        <div className="contact-container">
          <h2 className="section-title1">Contact Us</h2>
          <div className="contact-info">
            <p className="contact-item">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="contact-item">
              <strong>Email:</strong> support@carrentalco.com
            </p>
            <p className="contact-item">
              <strong>Address:</strong> 123 CarRental St, Auto City, CA 12345
            </p>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default Contact;
