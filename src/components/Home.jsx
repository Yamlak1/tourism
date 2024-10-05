// Home.jsx
import React from "react";
import bg from "../assets/Leonardo_Phoenix_Vibrant_high_dynamic_range_HDR_photography_of_1.jpg";
import { MdArrowCircleDown } from "react-icons/md";

function Home({ scrollToSection }) {
  return (
    <div className="h-screen w-screen relative">
      {/* Flex container to space out the two sections properly */}
      <div className="absolute inset-0 flex justify-between z-10 flex-col lg:flex-row mt-10">
        {/* History and Heritage section */}
        <div className="lg:w-1/2 flex flex-col lg:pl-14 mt-20 hidden lg:block">
          <h1 className="text-white text-4xl font-bold mb-4">
            History and Heritage
          </h1>
          <h2 className="text-white text-lg">
            Ethiopia is a land of ancient wonders and rich cultural heritage.{" "}
            <br />
            From the historic Aksumite Empire to the stunning rock-hewn churches
            of Lalibela, Ethiopia offers a unique blend of history, tradition,
            and beauty.
          </h2>
        </div>

        {/* People and Culture section */}
        <div className="lg:w-1/2 flex flex-col lg:pr-14 mt-20 hidden lg:block text-right">
          <h1 className="text-white text-4xl font-bold mb-4">
            People and Culture
          </h1>
          <h2 className="text-white text-lg font-light">
            Ethiopia is a rich tapestry of over 80 ethnic groups, known for
            their hospitality and unique traditions. The culture is celebrated
            through vibrant festivals, music, and communal dining, especially
            with dishes like injera. This blend of ancient heritage and modern
            influences makes Ethiopia a captivating destination.
          </h2>
        </div>
      </div>

      {/* Background image */}
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed" }}
      ></div>

      {/* Main heading for both mobile and desktop */}
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col mt-14">
        <h1 className="text-white text-5xl md:text-8xl font-bold mb-4 mt-20 text-center">
          Explore Ethiopia
        </h1>
        <h2 className="text-white text-xl md:text-4xl text-center px-4">
          Discover the cradle of humanity in Ethiopia, a land of wonders.
        </h2>
      </div>

      {/* Scroll down button */}
      <div className="absolute inset-0 flex items-center justify-end z-10 flex-col">
        <div
          className="text-white text-5xl font-bold mb-4 animate-bounce cursor-pointer"
          onClick={scrollToSection}
        >
          <MdArrowCircleDown />
        </div>
      </div>
    </div>
  );
}

export default Home;
