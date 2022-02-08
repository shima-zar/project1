import React from "react";
import { Link } from "react-router-dom";
import one from "../assets/one.jpeg";
import five from "../assets/five.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <image style={{ backgroundImage: `url(${one})` }}></image>
      <video src={five} autoPlay loops muted></video>
      <div className="headerContainer">
        <h1> Overcome stuff </h1>
        <h2>Innovative Cleaning &amp; Organizing</h2>
        <h3>We Connect the dots</h3>
        <h4>The tool you need to put you in motion</h4>
        <h4>Sign up and get your motivation here</h4>
        <Link to="/signup">
          <button> Sign Up </button>
        </Link>
      </div>
    </div>
    // style={{ backgroundImage: `url(${one})` }}
  );
}

export default Home;
