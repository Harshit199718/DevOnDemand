import React from "react";
import leftImage from "../../../assets/images/leftIcon.png";
import clapImage from "../../../assets/images/clap.png";
import checkB from "../../../assets/images/checkBack.png";
import checkF from "../../../assets/images/checkFront.svg";
import "./left.css";

export default class LeftContainer extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 p-5">
        <div>
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src={leftImage}
                style={{ width: "60px", paddingRight: "20px" }}
                alt=""
              />
              on<span className="font-weight-bold bold-text">demand</span>
            </div>
            <div className="col-md-6 h-100 d-flex align-items-center">
              <span className="pl-5">Pricing</span>
              <span className="ml-auto">About us</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h5 className="x-bold-text mt-5 left-head">
                Your FrontEnd Developer on Demand
              </h5>
              <p className="mb-2">
                Responsive and pixel perfect React development for &euro;200{" "}
                <img
                  src={clapImage}
                  style={{ width: "14px", marginBottom: "4px" }}
                  alt=""
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-5 d-flex align-items-center">
              <div className="right-sign">
                <img src={checkF} className="front" alt="" />
              </div>
              <span className="ml-3 font-weight-bold">
                Delivery in 3 business days
              </span>
            </div>

            <div className="col-sm-12 col-md-7 d-flex align-items-center">
              <div className="right-sign">
                <img src={checkF} className="front" alt="" />
              </div>
              <span className="ml-3 font-weight-bold">No contract</span>
            </div>
          </div>
          <form className="mt-4 form-details row">
            <label htmlFor="imageLink" className="d-block col-12">
              Link to your design
            </label>
            <div className="col-11">
              <input
                type="text"
                name="imageLink"
                className=""
                placeholder="Wetransfer is the best option"
              />
            </div>
            <label htmlFor="total-pages" className="d-block col-12 mt-2">
              Link to your design
            </label>
            <div className="col-11">
              <input
                type="text"
                name="total-pages"
                className=""
                placeholder="Wetransfer is the best option"
              />
            </div>
            <label htmlFor="email" className="d-block col-12 mt-2">
              Link to your design
            </label>
            <div className="col-11">
              <input
                type="text"
                name="email"
                className=""
                placeholder="Wetransfer is the best option"
              />
            </div>
            <div className="col-11 mt-5">
              <button className="btn-started">Get Started</button>
            </div>
            <div className="col-11 terms_container mt-4">
              <p className="terms">
                By clicking the button, you agree to our
                <span>Terms of Service</span> and have read the acknowledge our
                <span>Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
