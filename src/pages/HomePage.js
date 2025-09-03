import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Welcome to Little Lemon</h2>
      <p className="mt-4">Reserve your table easily and enjoy our delicious menu.</p>
      <Link
        to="/booking"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Book a Table
      </Link>
    </section>
  );
}

export default HomePage;
