import React from "react";
import ethio from "../assets/Screenshot_from_2024-10-05_14-34-01-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";

function Navbr() {
  const location = useLocation();

  return (
    <nav className="bg-red-300/20 backdrop-blur-sm fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={ethio} alt="Logo" className="h-14 w-48 ml-16" />
      </div>

      <Link to={location.pathname === "/about" ? "/" : "/about"}>
        <button className="bg-red-300/20 text-white px-6 py-2 rounded-lg border border-white hover:bg-red-500/40 transition-all duration-300">
          {location.pathname === "/about" ? "Home" : "About Us"}
        </button>
      </Link>
    </nav>
  );
}

export default Navbr;
