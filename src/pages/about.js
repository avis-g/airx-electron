import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import "../App.css";
import Layout from "../Layout";

const About = () => {
  const aboutthe = () => {
    return (
      <div className="about">
        <p>Welcome to the About Page</p>
        <Link className="App-link" to="/">
          Link to Home
        </Link>
        <img className="about-img" width="275" src={Logo} alt="" />
      </div>
    );
  };
  return (
    <>
      <Layout />

      <div className="about">
        <p>Welcome to the About Page</p>
        <Link className="App-link" to="/">
          Link to Home
        </Link>
        <img className="about-img" width="275" src={Logo} alt="" />
      </div>
    </>
  );
};

export default About;
