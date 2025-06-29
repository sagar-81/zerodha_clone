import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftImage
        productName={"Kite"}
        productDesc={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        imageUrl={"media/images/kite.png"}
      />
      <RightSection
        productName={"Console"}
        productDesc={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link={"Learn more"}
        imageUrl={"media/images/console.png"}
      />
      <LeftImage
        productName={"Coin"}
        productDesc={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        imageUrl={"media/images/coin.png"}
      />
      <RightSection
        productName={"Kite Connect API"}
        productDesc={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        link={"Kite Connect"}
        imageUrl={"media/images/kiteconnect.png"}
      />
      <LeftImage
        productName={"Varsity mobile"}
        productDesc={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        imageUrl={"media/images/varsity.png"}
      />
      <p className="text-center fw-semibold">
        Want to know more about our technology stack? Check out the{" "}
        <Link to={"/"}>
          <a href="/">Zerodha.tech</a>
        </Link>{" "}
        blog.
      </p>
      <h3 className="mt-5 text-center">The Zerodha Universe</h3>
      <p className="mt-3 text-center">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <Universe />
      
    </>
  );
};

export default ProductPage;
