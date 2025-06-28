import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="mt-3">404</h1>
        <p>Sorry, the page you are looking for does not exist</p>
        <Link to="/">
          <button
            style={{
              backgroundColor: "#387ed1",
              fontSize: "20px",
              wordSpacing: "2px",
            }}
            className="border-0 p-2 px-5 text-white fw-semibold rounded-2"
          >
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
