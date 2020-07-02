import React from "react";
import "./popup.css";
import cook from "../../../assets/images/cook.gif";
import cool from "../../../assets/images/cool.gif";
import pricing from "../../../assets/images/pricing.gif";
import checkFront from "../../../assets/images/checkFront.svg";

function PopupBox(props) {
  const Position = () => {
    if (props.Pricing) {
      return { left: "33%", top: "100px" };
    }

    if (props.Thanks) {
      return { left: "50%", top: "40%", transform: "translate(-50%)" };
    } else {
      return {};
    }
  };
  return (
    <div className="popup-box_container" onClick={()=> props.setState({openPopup: false})} style={props.openPopup?{opacity:'1',pointerEvents:'visible'}:{opacity:'0',pointerEvents:'none'}}>
      <div className="popup-box" style={Position()}>
          <ul>
              <li></li>
              <li></li>
              <li onClick={()=> props.setState({openPopup:false})}></li>
          </ul>
        {props.AboutUs ? (
          <>
            <img src={cook} alt="" />
            <h5 className="x-bold-text about-us_header">
              Your Front End Team on Demand
            </h5>
            <p className="x-bold-text mt-3">
              Long story short. When David met Jonathan in an anti-cafe at{" "}
              <br />
              Station F (cowarking cafe), they ended up sympathizing. Shortly{" "}
              <br /> after they decided to <br />
              create a Front team and are joined by Fred and Maxime. 2 <br />{" "}
              years later there <br />
              are still for of us and we also work with other freelancers.{" "}
              <br />
              We decided <br /> to create onDemand to continue working together
              on the <br />
              technology we like the most: React. <br />
              The story continues every day and we will be happy to give life{" "}
              <br />
              to your <br />
              design (Xd/ Sketch or Figma). <br />
            </p>
            <p className="x-bold-text">
              ReactorDemand.co is based in Paris France- if you want to <br />
              send us <br />
              postcards :)
            </p>
          </>
        ) : null}
        {props.Pricing ? (
          <>
            <img src={pricing} alt="" />
            <h5 className="x-bold-text pricing_header">
              One plan, no bull shit
            </h5>
            <h5 className="x-bold-text pricing_header">&euro; 200 / page</h5>
            <p className="pricing_para mt-3">Delivery = 4 business days</p>
            <div className="feature mt-3">
              <div className="check">
                <img src={checkFront} alt="" />
              </div>
              <p>Responsive</p>
            </div>
            <div className="feature mt-3">
              <div className="check">
                <img src={checkFront} alt="" />
              </div>
              <p>Pixel Perfect</p>
            </div>
            <p className="max-length mt-4">Maximum length = 8332 px</p>
          </>
        ) : null}
        {props.Thanks ? (
          <>
            <img src={cool} alt="" />
            <h5 className="x-bold-text thanks_header">Thanks for your order</h5>
            <p className="thanks_para">
              You will recieve a mail when it's ready
            </p>
            <p className="thanks_para">
              If you have any questions: hello@ondemand.co
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default PopupBox;
