import { Link } from "react-router-dom";
import AuthComponents from "../../../../AuthPages/AuthComponents/AuthComponents";
import jeep from "./jeep.png";
import "./NavbarUp.css"; // Import the CSS file

const NavbarUp = () => {
  return (
    <>
      <header>
        <Link className="logo" to="/home">
          <div className="logo-container">
            <img src={jeep} alt="CarRent CO." />
            <span className="logo-text">E_Shop.</span>
          </div>
        </Link>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div className="header-btn">
          <AuthComponents />
          {/* <a href="#" className="sign-up">
            Sign Up
          </a> */}
          {/* <a href="#" className="sign-in">
            Sign In
          </a> */}
        </div>
      </header>
    </>
  );
};
export default NavbarUp;
