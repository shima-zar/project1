import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { response } from "express";
// import React, { useState } from "react";
// import List from "./components/List.js";
// import Home from "./components/Home.js";

export default function App() {
  // const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/signup" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
  //   <div className="col">
  //     <h1> Döte </h1>

  //     {isHome ? (
  //       <button className="headerButton" onClick={() => setIsHome(false)}>
  //         {" "}
  //         Sign in{" "}
  //       </button>
  //     ) : (
  //       <button className="headerButton" onClick={() => setIsHome(true)}>
  //         {" "}
  //         Home{" "}
  //       </button>
  //     )}
  //     <div> {isHome ? <Home /> : <List />}</div>
  //   </div>
  // );
}
