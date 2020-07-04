import React from "react";
import leftImage from "../../../assets/images/leftIcon.png";
import clapImage from "../../../assets/images/clap.png";
import checkF from "../../../assets/images/checkFront.svg";
import close from "../../../assets/images/close.png";
import bars from "../../../assets/images/bars.png";
import "./left.css";
import PopupBox from "./PopupBox";

export default class LeftContainer extends React.Component {
  state = {
    menuOpen: false,
    AboutUs: false,
    Pricing: false,
    Thanks: false,
    openPopup: false,
  };
  render() {
    console.log(this.state);
    const {link, pages, email} = this.state
    return (
      <div className="col-md-6 col-lg-6 p-5 left_container">
        <PopupBox
        receipt_email={email}
        pages={pages}
        designLink={link}
          openPopup={this.state.openPopup}
          close={(thanks) => this.setState({menuOpen: false,
            AboutUs: false,
            Pricing: false,
            Payment:false,
            Thanks: thanks?true:false,
            openPopup: thanks?true:false})}
            reset={()=>this.setState({
                pages:"",
                link:"",
                email:""
            })}
            open={()=>{
              console.log("open clicked")
              this.setState({menuOpen: false,
              AboutUs: false,
              Pricing: false,
              Payment:true,
              Thanks: false,
              openPopup: true})}}
          Thanks={this.state.Thanks}
          AboutUs={this.state.AboutUs}
          Pricing={this.state.Pricing}
          Payment={this.state.Payment}
        />
        <div>
          <div className="row align-items-center mb-5 top-bar">
            <div className="col-8 col-md-7 d-flex align-items-center">
              <img
                src={leftImage}
                style={{ width: "60px", paddingRight: "20px" }}
                alt=""
              />
              <p>on<span className="font-weight-bold bold-text">demand</span></p>
            </div>
            {
              !this.state.menuOpen?
              <img onClick={() => {
                this.setState({ menuOpen: !this.state.menuOpen });
                console.log(this.state.menuOpen);
              }} className='close ml-auto' src={bars} alt='X'/>
              : 
              <img onClick={() => {
                this.setState({ menuOpen: !this.state.menuOpen });
                console.log(this.state.menuOpen);
              }} className='close ml-auto' src={close} alt='X'/>
            }
            <div
              className={`col-md-5 h-100 d-flex align-items-center page-links ${
                this.state.menuOpen ? "page-links-on" : ""
              }`}
            >
              <div className="d-flex align-items-center col-12">
                <p
                  className="m-0"
                  onClick={() =>
                    this.setState({
                      Pricing: true,
                      AboutUs: false,
                      Thanks: false,
                      openPopup: true,
                      menuOpen: false,
                      Payment:false
                    })
                  }
                >
                  Pricing
                </p>
                <p
                  className="m-0 ml-auto"
                  onClick={() =>
                    this.setState({
                      AboutUs: true,
                      Pricing: false,
                      Thanks: false,
                      openPopup: true,
                      menuOpen: false,
                      Payment:false
                    })
                  }
                >
                  About us
                </p>
              </div>
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
                  style={{ width: "25px", marginBottom: "4px" }}
                  alt=""
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-2 mb-sm-0 d-flex align-items-center feat">
              <div className="right-sign">
                <img src={checkF} className="front" alt="" />
              </div>
              <span className="ml-3 font-weight-bold">
                Delivery in 3 business days
              </span>
            </div>

            <div className="col-sm-12 col-md-6 d-flex align-items-center feat">
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
            <div className="col-12 col-md-11">
              <input
                type="text"
                name="imageLink"
                className=""
                placeholder="Wetransfer is the best option"
                onChange={(e)=>this.setState({link: e.target.value})}
                autoComplete="off"
              />
            </div>
            <label htmlFor="total-pages" className="d-block col-12 mt-2">
              Number of Pages
            </label>
            <div className="col-12 col-md-11">
              {/* <input
                type="number"
                name="total-pages"
                className=""
                placeholder="Pages"
                min="1"
                onChange={(e)=>this.setState({pages: e.target.value})}
              /> */}
              <select className='selectpicker' name="" id="" value={this.state.pages} onChange={(e)=>this.setState({pages: parseInt(e.target.value)})}>
                <option value="" >Number of Pages</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              {/* <Select options={[{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6}]}
              placeholder="Number of pages"
              components={{IndicatorSeparator:()=>null}}
                styles={{
                  container:(p)=>({...p,borderRadius:"9px"}),
                  control:(p)=>({...p,borderRadius:"9px",padding:"4px",border: "2px solid #E2E3E9"

                }),
                }}
              /> */}
            </div>
            <label htmlFor="email" className="d-block col-12 mt-2">
              Your e-mail
            </label>
            <div className="col-12 col-md-11">
              <input
                type="email"
                name="email"
                className=""
                placeholder="name@email.com"
                onChange={(e)=>this.setState({email: e.target.value})}
                autoComplete="off"
              />
            </div>
            <div className="col-12 col-md-11 mt-5">
              <button
                className="btn-started"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    Thanks: false,
                    AboutUs: false,
                    Pricing: false,
                    openPopup: true,
                    Payment:true
                  });
                }}

                disabled={!(link && (email?email.includes('@'):null) && pages)}
              >
                Get Started
              </button>
            </div>
            <div className="col-11 terms_container mt-4">
              <p className="terms">
                By clicking the button, you agree to our
                <a href="http://www.devondemand.co/terms"> Terms of Service</a> and have read the acknowledge our
                <a href="http://www.devondemand.co/privacy">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
