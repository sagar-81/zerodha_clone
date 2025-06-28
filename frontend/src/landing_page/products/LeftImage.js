import React from "react";
import { Link } from "react-router-dom";

const LeftImage = ({
  imageUrl,
  productName,
  productDesc,
  tryDemo,
  learnDemo,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container p-5 mt-5 border-top">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 mt-5 p-5">
          <h2>{productName}</h2>
          <p>{productDesc}</p>

          <div className="mt-3">
            <Link to={tryDemo} className="me-5">
              {" "}
              <a href="/">Try Demo</a>{" "}
              <i
                class="fa fa-long-arrow-right"
                style={{ color: "#387ed1" }}
                aria-hidden="true"
              ></i>
            </Link>

            <Link to={learnDemo}>
              {" "}
              <a href="/">Learn Demo</a>{" "}
              <i
                class="fa fa-long-arrow-right"
                style={{ color: "#387ed1" }}
                aria-hidden="true"
              ></i>
            </Link>
          </div>
          <div className="mt-3">
            <Link to={googlePlay} className="me-5">
              <img src="media/images/appstoreBadge.svg" alt="" />
            </Link>
            <Link to={appStore}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
