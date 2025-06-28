import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>
      <div className="row mt-5 p-5 text-muted">
        <div className="col-1"></div>
        <div className="col-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to="/">
              <a href="/">Rainmatter</a>
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link to="/">
              <a href="/">blog</a>
            </Link>{" "}
            or see what the media is{" "}
            <Link to="/">
              <a href="/"> saying about us</a>
            </Link>{" "}
            or learn more about our business and product{" "}
            <Link to="/">
              <a href="/">philosophies</a>
            </Link>{" "}
            .
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Hero;
