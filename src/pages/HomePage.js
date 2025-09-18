import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // <-- Add this image
import logo from "../assets/logo.jpg"; // <-- Add Little Lemon logo

function HomePage() {
  return (
    <section className="text-center py-10">
      {/* Logo */}
      <img 
        src={logo} 
        alt="Little Lemon Logo" 
        className="mx-auto w-32 mb-6" 
      />

      {/* Hero Image */}
      <div className="flex justify-center">
        <img 
          src={heroImage} 
          alt="Little Lemon Restaurant" 
          className="rounded-2xl shadow-lg w-full max-w-3xl mb-8"
        />
      </div>

      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-green-800">Welcome to Little Lemon</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        Reserve your table easily and enjoy our freshly prepared dishes, made with love
        and locally sourced ingredients.
      </p>

      {/* Button */}
      <Link
        to="/booking"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300"
      >
        Book a Table
      </Link>
    </section>
  );
}

export default HomePage;
