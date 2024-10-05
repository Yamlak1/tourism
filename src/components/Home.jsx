import React, { useRef } from "react";
import bg from "../assets/Leonardo_Phoenix_Vibrant_high_dynamic_range_HDR_photography_of_1.jpg";
import { MdArrowCircleDown } from "react-icons/md";

function Home({ scrollToSection }) {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 flex items-start z-10 flex-col mt-10">
        <h1 className="text-white text-4xl p-14 font-bold mt-20 -mb-4">
          History and Heritage
        </h1>
        <span className="pl-10">
          <h2 className="text-white text-lg">
            Ethiopia is a land of ancient wonders and rich cultural heritage.{" "}
            <br />
            From the historic Aksumite Empire to the stunning <br />
            rock-hewn churches of Lalibela, Ethiopia offers a unique blend{" "}
            <br /> of history, tradition, and beauty.
          </h2>
        </span>
      </div>

      <div className="absolute top-0 right-0 z-10 flex flex-col items-end mt-10">
        <h1 className="text-white text-4xl p-14 font-bold mt-20 -mb-4">
          People and Culture
        </h1>
        <span className="pr-10">
          <h2 className="text-white text-lg text-right font-light">
            Ethiopia is a rich tapestry of over 80 ethnic groups, known for{" "}
            their <br /> hospitality and unique traditions. The culture is
            celebrated through vibrant festivals, <br />
            music, and communal dining, especially with dishes like injera.{" "}
            <br />
            This blend of ancient heritage and modern influences makes Ethiopia
            a captivating destination.
          </h2>
        </span>
      </div>

      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed" }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col mt-14">
        <h1 className="text-white text-8xl font-bold mb-4 mt-20">
          Explore Ethiopia
        </h1>
        <span>
          <h2 className="text-white text-4xl">
            Discover the cradle of humanity in Ethiopia, a land of wonders.
          </h2>
        </span>
      </div>

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
