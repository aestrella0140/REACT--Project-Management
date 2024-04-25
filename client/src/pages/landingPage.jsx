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
        
        <div className="inner">
          <img className="img-fluid width-50" src={goreLogo} alt="Gore Logo" />
        </div>
        <h1 className="cover-heading">Welcome to our Continuous team!</h1>
        <div className="d-flex flex-column justify-content-center align-items-center vh-50">
          <p className="w-50 lead">
            W.L Gore's continuous improvement process is all about fostering
            team collaboration, encouraging innovative thinking, and
            relentlessly pursuing incremental enhancement to products and
            processes. Its a culture where everyones voice matters, and the aim
            is to create high-quality products that lead the market.
          </p>
        </div>
        <p className="lead"></p>

        {/* need three core values for here*/}
        <div className="d-flex justify-content-around ">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flip-card " style={{ width: "18rem" }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5 className="card-title">Card title {i}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    
                  </h6>
                </div>
                <div className="flip-card-back">
                  <p>some text here stherasdlkfja;sdlkfjasdfa</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta d-flex flex-column justify-content-center align-items-center vh-100 bg-light mt-4 container-lg border mt-5 shadow" style={{ maxWidth: "60%", maxHeight: "400px"}}>
          <h3 className="mb-4">be apart of our team, Signup or login below!</h3>
          <p className="text-center w-50 p-3 mb-4">
            join a community of innovative thinkers dedicated to continuous
            improvement. You'll have access to our resources, be able to
            participate in discussions, share your ideas, and contribute to our
            ongoing efforts to enhance our products and processes.
          </p>
          <div className="d-flex justify-content-center m-2">
            <Link to="/Signup">
              <button className="mb-2">Signup</button>
            </Link>
          </div>
          <div>
            <Link to="/Login">
              <button className="mb-2">Login</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
