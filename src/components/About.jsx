import React from "react";
import bg from "../assets/Leonardo_Phoenix_Vibrant_high_dynamic_range_HDR_photography_of_1.jpg";

function About() {
  return (
    <div className="h-screen w-screen relative">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed" }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col mt-14 text-center">
        <div className="bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-white text-8xl font-bold mb-4">About Us</h1>
          <p className="text-white text-2xl mb-4">
            Welcome to Ethio Tour! We specialize in providing unforgettable
            experiences in Ethiopia, from breathtaking landscapes to rich
            cultural heritage.
          </p>
          <h2 className="text-white text-2xl mb-4">
            Our mission is to showcase the beauty and diversity of Ethiopia,
            making it accessible to travelers from all over the world.
          </h2>
          <p className="text-white text-2xl mb-4">
            Why Ethiopia? Because it is a land filled with unique cultures,
            historical treasures, and welcoming people.
          </p>
          <p className="text-white text-2xl mb-4">
            Connect with us to explore Ethiopia’s hidden gems and experience the
            warmth of its hospitality.
          </p>
          <p className="text-white text-xl mt-10">
            For inquiries, reach us at{" "}
            <a href="mailto:yamlakf1@gmail.com" className="underline">
              yamlakf1@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
