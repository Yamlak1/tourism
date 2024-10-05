import React from "react";
import destinations from "../constants/bestDestinationLists";
import { Link } from "react-router-dom";

function BestDestinations() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-red-300/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={destination.destinationImage}
              alt={destination.destinationName}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {destination.destinationName}
              </h2>
              <p className="text-white">{destination.destinationDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link to="/about">
          <button className="bg-red-300/20 text-white px-6 py-2 rounded-lg border border-white hover:bg-red-500/40 transition-all duration-300">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BestDestinations;
