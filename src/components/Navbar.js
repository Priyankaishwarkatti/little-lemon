import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/reserve">Reserve Table</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
