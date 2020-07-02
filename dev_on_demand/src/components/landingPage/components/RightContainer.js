import React from 'react'
import classnames from 'classnames'
import heartImage from '../../../assets/images/heart.png'
import './right.css'

import webD1 from '../../../assets/images/webD1.jpg'
import webD2 from '../../../assets/images/webD2.jpg'
import webD3 from '../../../assets/images/webD3.jpg'

export default class LeftContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "1",
            transform:''
        }
    }
    selectLink = (e, selected) => {
        e.preventDefault()
        this.setState({ selected })
    }

    setTransform = (transform) =>{
        this.setState({
            transform
        })
    }
    render() {
        const { selected } = this.state
        return (
            <div className="d-md-block col-md-6 col-lg-6 border-0 grad-back">
                <div className="back-right-cont">
                    <p className="right-head-text text-right">fiverr<sup className="">&#174;</sup></p>
                </div>
                <div className="mt-5 pt-5 pb-5">
                    <div className="mb-5 mx-auto center-container">
                        <div className="dotted-back-tr"></div>
                        <div className="dotted-back-bl"></div>
                        <div className="right-cont">
                            <img src={webD1} alt="" style={{transform: this.state.transform}}/>
                            <img src={webD2} alt="" style={{transform: this.state.transform}}/>
                            <img src={webD3} alt="" style={{transform: this.state.transform}}/>
                            <img src={webD1} alt="" style={{transform: this.state.transform}}/>

                            <div className="dotstyle-right-cont text-right mr-3">
                                <ul>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 text-center text-white font-weight-bold bold-text">transleat.co</p>
                    <p className="mt-3 text-center text-white">Made with reactondemand.co&nbsp;&nbsp;<img src={heartImage} style={{ width: "12px", marginBottom: "8px" }} alt="" /></p>
                    <div className="dotstyle text-center mt-4">
                        <ul>
                            <li onClick={()=> this.setTransform('translateX(0)')}><a className={classnames({ "active-page-link": selected === "1" })} href="#" onClick={(e) => this.selectLink(e, "1")}>1</a></li>
                            <li onClick={()=> this.setTransform('translateX(-100%)')}><a className={classnames({ "active-page-link": selected === "2" })} href="#" onClick={(e) => this.selectLink(e, "2")}>2</a></li>
                            <li onClick={()=> this.setTransform('translateX(-200%)')}><a className={classnames({ "active-page-link": selected === "3" })} href="#" onClick={(e) => this.selectLink(e, "3")}>3</a></li>
                            <li onClick={()=> this.setTransform('translateX(-300%)')}><a className={classnames({ "active-page-link": selected === "4" })} href="#" onClick={(e) => this.selectLink(e, "4")}>4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}