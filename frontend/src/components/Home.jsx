// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Shehadeh Shopping </h1>
      <p className="text-xl mb-8">Discover amazing products at great prices!</p>
      <Link
        to="/products"
        className="bg-stone-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-neutral-800 transition duration-300"
      >
        Shehadeh Shopping
      </Link>
    </div>
  );
};

export default Home;
