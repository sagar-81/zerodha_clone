import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" className="p-3" style={{ textDecoration: "none" }}>
            See pricing
          </a>
          <i
            class="fa fa-long-arrow-right"
            style={{ color: "#387ed1" }}
            aria-hidden="true"
          ></i>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col-6" style={{ border: "1px solid black" }}>
              <h1>रु 0</h1>
              <p>Free equity delivery and<br/> direct mutual funds</p>
            </div>
            <div
              className="col-6"
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
                borderBottom: "1px solid black"
              }}
            >
              <h1>रु 20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
