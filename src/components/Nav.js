import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Little Lemon</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/booking">Book Table</Link>
      </div>
    </nav>
  );
}

export default Nav;
