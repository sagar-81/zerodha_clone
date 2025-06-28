import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="container p-5">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt=""
          className="mb-5"
          height={"20%"}
          width={"20%"}
        />
        <div className="text-center">
          <h1 className="mt-3">Invest in everything</h1>

          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link to="/signup">
            <button
              style={{
                backgroundColor: "#387ed1",
                fontSize: "20px",
                wordSpacing: "2px",
              }}
              className="border-0 p-2 px-5 text-white fw-semibold rounded-2"
            >
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
