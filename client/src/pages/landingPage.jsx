import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import goreLogo from "../assets/goreLogo.png";
import heroBanner from "../assets/Hero_banner_xzkrSXH_max.jpg";

const LandingPage = () => {
  return (
    <div className="text-center">
      <header className="masthead mb-auto"></header>

      <main role="main" className="inner cover">
        <div
          className="hero mt-0"
          style={{ backgroundImage: `url(${heroBanner})`, height: "350px" }}
        ></div>
        <h3 className="masthead-brand">Continuous Improvement</h3>
        <div className="inner">
          <img className="img-fluid width-50" src={goreLogo} alt="Gore Logo" />
        </div>
        <h1 className="cover-heading">
          Welcome to our Continuous team!
        </h1>

        <p className="lead">
          W.L Gore's continuous improvement process is all about fostering team
          collaboration, encouraging innovative thinking, and relentlessly
          pursuing incremental enhancement to products and processes. Its a
          culture where everyones voice matters, and the aim is to create
          high-quality products that lead the market.
        </p>
        <p className="lead"></p>

    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <p className="text-center  w-50 p-3">join a community of innovative thinkers dedicated to continuous improvement. You'll have access to our resources, be able to participate in discussions, share your ideas, and contribute to our ongoing efforts to enhance our products and processes.</p>
        <div className="d-flex justify-content-center m-2">
          <Link to="/Signup">
            <button className="">Signup</button>
          </Link>
        </div>
        <div>
          <Link to='/Login'>
            <button>Login</button>
          </Link>
        </div>
    </div>
      </main>
    </div>
  );
};

export default LandingPage;
