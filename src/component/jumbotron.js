import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'

class Jumbotron extends Component {
    render () {
        return (
            <Container fluid>
                <div className="jumbotron">
                    
                    <div className="guild-image">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li><img src={require('../images/Guild Icon text white.png')} width="160" height="160" alt="Guild of Cryptocurrencies Logo"/></li>
                            {/* <div className="last-li"><img src={require('../images/Guild Icon text white.png')} width="160" height="160" alt="Guild of Cryptocurrencies Logo"/></div> */}
                        </ul>   
                    </div>
                </div>
            </Container>
        )
    }
}

export default Jumbotron