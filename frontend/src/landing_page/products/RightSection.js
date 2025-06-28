import React from "react";
import { Link } from "react-router-dom";

const RightSection = ({ imageUrl, productName, productDesc, link }) => {
  return (
    <div className="container p-5 mt-5 border-top">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="" height={'90%'} width={'90%'} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h2>{productName}</h2>
          <p>{productDesc}</p>
          <Link className="me-5">
            {" "}
            <a href="/">{link}</a>{" "}
            <i
              class="fa fa-long-arrow-right"
              style={{ color: "#387ed1" }}
              aria-hidden="true"
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
