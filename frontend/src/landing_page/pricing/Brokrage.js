import React from "react";

const Brokrage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <a href="/">
            {" "}
            <h3>Brokrage calculator</h3>
          </a>
          <ul className="mt-3">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital Contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes , if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </li>
            <li>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </li>
          </ul>
        </div>
        <div className="col">
          <a href="/">
            {" "}
            <h3>List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokrage;
