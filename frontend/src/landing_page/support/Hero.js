import React, { useState } from "react";

const Hero = () => {
  const [text, SetText] = useState("");

  return (
    <div className="p-5" style={{ backgroundColor: "#387ed1" }}>
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <p className="text-white fs-5">Support Portal</p>
            <p className="text-white mt-5 fs-4">
              Search for an answer or browse help topics to create a ticket
            </p>
            <div
              style={{ display: "flex", alignItems: "center", width: "80%" }}
            >
              <input
                style={{ padding: "20px", flex: 1 }}
                onChange={(e) => SetText(e.target.value)}
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              />
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{
                  marginLeft: "-35px",
                  cursor: "pointer",
                  color: "#999",
                }}
              ></i>
            </div>
            <div className="d-flex p-5 flex-wrap gap-4 align-start">
              <a
                className="text-white"
                href="/"
                style={{ textDecoration: "underline" }}
              >
                Track account opening
              </a>
              <a
                className="text-white"
                href="/"
                style={{ textDecoration: "underline" }}
              >
                Track segment activation
              </a>
              <a
                className="text-white"
                href="/"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                Intraday margins
              </a>
              <a
                className="text-white"
                href="/"
                style={{ textDecoration: "underline" }}
              >
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col">
            <p className="text-white text-end fs-5">Track tickets</p>
            <h3 className="text-white mt-5">Featured</h3>
            <ol type="1">
              <li className="text-white">
                {" "}
                <a href="/" className="text-white">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li className="text-white">
                <a href="/" className="text-white">
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
