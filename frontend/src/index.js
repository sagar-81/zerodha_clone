import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about_us/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/signups/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
