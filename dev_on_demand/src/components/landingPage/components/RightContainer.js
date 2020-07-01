import React from 'react'
import classnames from 'classnames'
import heartImage from '../../../assets/images/heart.png'
import './right.css'

export default class LeftContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "1"
        }
    }
    selectLink = (e, selected) => {
        e.preventDefault()
        this.setState({ selected })
    }
    render() {
        const { selected } = this.state
        return (
            <div className="d-none d-md-block d-lg-block col-md-6 col-lg-6 border-0 grad-back">
                <div className="back-right-cont">
                    <p className="right-head-text text-right">fiverr<sup className="">&#174;</sup></p>
                </div>
                <div className="mt-5 pt-5 pb-5">
                    <div className="mt-5 mb-5 mx-auto center-container">
                        <div className="dotted-back-tr"></div>
                        <div className="dotted-back-bl"></div>
                        <div className="right-cont">
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
                            <li><a className={classnames({ "active-page-link": selected === "1" })} href="#" onClick={(e) => this.selectLink(e, "1")}>1</a></li>
                            <li><a className={classnames({ "active-page-link": selected === "2" })} href="#" onClick={(e) => this.selectLink(e, "2")}>2</a></li>
                            <li><a className={classnames({ "active-page-link": selected === "3" })} href="#" onClick={(e) => this.selectLink(e, "3")}>3</a></li>
                            <li><a className={classnames({ "active-page-link": selected === "4" })} href="#" onClick={(e) => this.selectLink(e, "4")}>4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}