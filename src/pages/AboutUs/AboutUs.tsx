import { Layout } from "antd";

import NavbarUp from "../HomePage/Navbar/NavbarUp/NavbarUp";
import "./AboutUs.css"; // Import the CSS file
import Sidebar from "../../PHForm/layout/Sidebar";

const AboutUs = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <NavbarUp />
        <div className="about-us-container">
          {/* Company Overview Section */}
          <div className="company-overview">
            <h1 className="section-title deeppink">About Us</h1>
            <p className="company-description">
              Founded in 2010, CarRental Co. has been committed to providing the
              best car rental services with a focus on customer satisfaction,
              sustainability, and a diverse fleet of vehicles. Our mission is to
              make your journey as smooth as possible, whether you need an
              economy car for a quick trip or a luxury vehicle for a special
              occasion.
            </p>
            <p className="company-mission">
              <strong>Mission:</strong> To provide exceptional car rental
              services that exceed customer expectations.
            </p>
            <p className="company-vision">
              <strong>Vision:</strong> To be the leading car rental company
              known for innovation, sustainability, and customer service
              excellence.
            </p>
          </div>

          {/* Team Profiles Section */}
          <div className="team-section">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-profiles">
              <div className="team-member">
                <img src="ceo.jpg" alt="CEO" className="team-photo" />
                <h3 className="team-name">John Doe</h3>
                <p className="team-role">CEO</p>
              </div>
              <div className="team-member">
                <img src="cto.jpg" alt="CTO" className="team-photo" />
                <h3 className="team-name">Jane Smith</h3>
                <p className="team-role">CTO</p>
              </div>
              <div className="team-member">
                <img src="cfo.jpg" alt="CFO" className="team-photo" />
                <h3 className="team-name">Michael Johnson</h3>
                <p className="team-role">CFO</p>
              </div>
            </div>
          </div>

          {/* Car Variety Section */}
          <div className="car-variety-section">
            <h2 className="section-title">Our Fleet</h2>
            <p className="car-variety-description">
              We offer a wide variety of cars to suit every need. Choose from
              our economy cars for budget-friendly options, luxury vehicles for
              a touch of elegance, or SUVs for family trips and off-road
              adventures.
            </p>
            <ul className="car-types-list">
              <li>Economy Cars</li>
              <li>Luxury Vehicles</li>
              <li>SUVs</li>
              <li>Convertibles</li>
              <li>Electric Vehicles</li>
            </ul>
          </div>

          {/* Commitment to Customers Section */}
          <div className="commitment-section">
            <h2 className="section-title">Our Commitment</h2>
            <p className="commitment-description">
              At CarRental Co., we are dedicated to providing outstanding
              customer service. We are committed to sustainability, with a
              growing fleet of electric and hybrid vehicles. Our 24/7 customer
              support ensures that help is always available when you need it.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="contact-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-info">
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> support@carrentalco.com
              <br />
              <strong>Address:</strong> 123 CarRental St, Auto City, CA 12345
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
