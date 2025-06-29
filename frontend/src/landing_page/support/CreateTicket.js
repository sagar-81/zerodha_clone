import React from "react";

const CreateTicket = () => {
  return (
    <div className="container mt-5">
      <h2>To create a ticket, select a relevant topic</h2>
      <div className="row p-5 m-5">
        <div className="col">
          <h5>
            <i className="fa fa-plus-square-o" aria-hidden="true"></i> Account
            Opening
          </h5>
          <a className="d-block mb-2" href="/">
            Resident individual
          </a>
          <a className="d-block mb-2" href="/">
            Minor
          </a>
          <a className="d-block mb-2" href="/">
            Non Resident Indian (NRI)
          </a>
          <a className="d-block mb-2" href="/">
            Company, Partnership, HUF and LLP
          </a>
          <a className="d-block mb-2" href="/">
            Glossary
          </a>
        </div>

        <div className="col">
          <h5>
            <i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account
          </h5>
          <a className="d-block mb-2" href="/">
            Your Profile
          </a>
          <a className="d-block mb-2" href="/">
            Account modification
          </a>
          <a className="d-block mb-2" href="/">
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a className="d-block mb-2" href="/">
            Nomination
          </a>
          <a className="d-block mb-2" href="/">
            Transfer and conversion of securities
          </a>
        </div>
        <div className="col">
          <h5>
            <i class="fa fa-stack-overflow" aria-hidden="true"></i> Kite
          </h5>
          <a className="d-block mb-2" href="/">
            IPO
          </a>
          <a className="d-block mb-2" href="/">
            Trading FAQs
          </a>
          <a className="d-block mb-2" href="/">
            Margin Trading Facility (MTF) and Margins
          </a>
          <a className="d-block mb-2" href="/">
            Charts and orders
          </a>
          <a className="d-block mb-2" href="/">
            Alerts and Nudges
          </a>
          <a className="d-block mb-2" href="/">
            General
          </a>
        </div>
      </div>

      {/* 
      2 */}

      <div className="row p-5 m-5">
        <div className="col">
          <h5>
            <i class="fa fa-money" aria-hidden="true"></i> Funds
          </h5>
          <a className="d-block mb-2" href="/">
            Add money
          </a>
          <a className="d-block mb-2" href="/">
            Withdraw money
          </a>
          <a className="d-block mb-2" href="/">
            Add bank accounts
          </a>
          <a className="d-block mb-2" href="/">
            eMandates
          </a>
        </div>
        <div className="col">
          <h5>
            <i class="fa fa-terminal" aria-hidden="true"></i> Console
          </h5>
          <a className="d-block mb-2" href="/">
            Portfolio
          </a>
          <a className="d-block mb-2" href="/">
            Corporate actions
          </a>
          <a className="d-block mb-2" href="/">
            Funds statement
          </a>
          <a className="d-block mb-2" href="/">
            Reports
          </a>
          <a className="d-block mb-2" href="/">
            Profile
          </a>
          <a className="d-block mb-2" href="/">
            Segments
          </a>
        </div>
        <div className="col">
          <h5>
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i>Coin
          </h5>
          <a className="d-block mb-2" href="/">
            Mutual funds
          </a>
          <a className="d-block mb-2" href="/">
            National Pension Scheme (NPS)
          </a>
          <a className="d-block mb-2" href="/">
            Features on Coin
          </a>
          <a className="d-block mb-2" href="/">
            Payments and Orders
          </a>
          <a className="d-block mb-2" href="/">
            General
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
