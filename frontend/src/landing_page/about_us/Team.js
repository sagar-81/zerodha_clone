import React from "react";

const Team = () => {
  return (
    <div className="container">
      <h1 className="text-center">People</h1>
      <div className="row p-5">
        <div className="col text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            height={"50%"}
            className="rounded-circle"
          />
          <h2>Nithin Kamath</h2>
          <h4>Founder, CEO</h4>
        </div>
        <div className="col p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a> /{" "}
            <a href="/">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
