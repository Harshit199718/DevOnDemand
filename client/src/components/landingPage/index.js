import React from 'react'
import { API_KEY } from '../../config/config'
import services from '../../AirtableService'
import './index.css'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="row m-0 landing-page">
                <LeftContainer history={this.props.history}/>
                <RightContainer/>
            </div>
        )
    }
}