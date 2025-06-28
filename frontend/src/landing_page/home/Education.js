import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-6">
          <h2>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" className="p-3" style={{ textDecoration: "none" }}>
            Varsity
          </a>
          <i
            class="fa fa-long-arrow-right"
            style={{ color: "#387ed1" }}
            aria-hidden="true"
          ></i>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/" className="p-3" style={{ textDecoration: "none" }}>
            TradingQ&A
          </a>
          <i
            class="fa fa-long-arrow-right"
            style={{ color: "#387ed1" }}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Education;
