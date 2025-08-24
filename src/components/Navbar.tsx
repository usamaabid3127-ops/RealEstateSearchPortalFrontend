import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; // We'll style it separately

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can clear auth token / session here if needed
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">🏠 RealEstatePro</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;