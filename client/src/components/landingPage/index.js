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

    handleAdd = () => {
        // services.addRecords([
        //     {
        //         fields: {
        //             Email: "divyamupadhyay884@gmail.com",
        //             Number: 9589099335,
        //             ImageUrl: "https://i.stack.imgur.com/GsDIl.jpg"
        //         }
        //     },
        //     {
        //         fields: {
        //             Email: "divyamupadhyay884@gmail.com",
        //             Number: 9589099335,
        //             ImageUrl: "https://i.stack.imgur.com/GsDIl.jpg"
        //         }
        //     }
        // ])
    }

    render() {
        return (
            <div className="row m-0 landing-page">
                <LeftContainer/>
                <RightContainer/>
            </div>
        )
    }
}