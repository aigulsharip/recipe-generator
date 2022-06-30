import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Routing/Home";
import About from "./components/Routing/About";
import React from "react";

const RoutingPractice = () => {
  return (
    <div>
      <Router>
        <div>
          <header>
            <a href="/home">Home</a>
            <br></br>
            <a href="/about">About</a>
          </header>

          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul> */}

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default RoutingPractice;
