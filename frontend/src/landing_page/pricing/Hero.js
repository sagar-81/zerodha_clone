import React from "react";

const Hero = () => {
  return (
    <div className="container text-center p-5">
      <h1>Charges</h1>
      <p>List of all charges and taxes</p>
      <div className="row mt-5">
        <div className="col-4">
          <img src="media/images/pricing0.svg" height="190" alt="" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" height="190" alt="" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" alt="" height="190" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
