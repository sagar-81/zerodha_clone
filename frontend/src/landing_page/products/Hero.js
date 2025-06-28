import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-center container mt-5 p-5">
      <h1 className="mt-1">Zerodha Products</h1>
      <p className="mt-4 text-muted">Sleek, modern, and intuitive trading platforms</p>

      <b className="mt-4">
        Check out our{" "}
        <Link>
          <a href="/"> investment offerings </a>
        </Link>
        <i
          class="fa fa-long-arrow-right"
          style={{ color: "#387ed1" }}
          aria-hidden="true"
        ></i>
      </b>
    </div>
  );
};

export default Hero;
