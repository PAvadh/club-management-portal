import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional if you want to style separately

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ClubConnect</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
