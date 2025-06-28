import React from "react";
import { Link } from "react-router-dom";

function OpenAccont() {
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="mt-3">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
          <button
            style={{
              backgroundColor: "#387ed1",
              fontSize: "20px",
              wordSpacing: "2px",
            }}
            className="border-0 p-2 px-5 text-white fw-semibold rounded-2"
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </>
  );
}

export default OpenAccont;
