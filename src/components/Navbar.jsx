import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="navbar">
        <li className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar-item ${location.pathname === "/transactions" ? "active" : ""}`}>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li className={`navbar-item ${location.pathname === "/dashboard" ? "active" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
