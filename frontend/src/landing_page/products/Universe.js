import React from "react";
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" height={"20%"} alt="" />
          <p className="mt-4 ">
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" height={"20%"} alt="" />
          <p className="mt-4 ">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png" height={"24%"} alt="" />
          <p className="mt-4 ">
            Thematic investing platform <br /> that helps you invest in
            diversified <br /> baskets of stocks on ETFs.
          </p>
        </div>
      </div>
      {/* <div className="row text-center">
        <div className="col-4 p-3 ">
          <img src="media/images/streakLogo.png" height={"10%"} alt="" />
          <p className="mt-4 ">
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" height={"10%"} alt="" />
          <p className="mt-4 ">
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" height={"10%"}  alt="" />
          <p className="mt-4 ">
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Universe;
