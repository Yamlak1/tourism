import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BestDestinations from "./components/BestDestinations";
import About from "./components/About";
import Navbr from "./components/Navbr";
import "./App.css";

function App() {
  const destinationRef = useRef(null);
  const scrollToSection = () => {
    destinationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {" "}
      <Router>
        <Navbr />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home scrollToSection={scrollToSection} />
                <div className="relative z-20" ref={destinationRef}>
                  <BestDestinations />
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
