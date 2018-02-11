import React, { Component } from 'react'
import Jumbotron from '../component/jumbotron';
import HowItWorks from '../component/hiw';

class Home extends Component {
    render () {
        return (
            <div>
                <section>
                    <Jumbotron/>
                </section>
                <section>
                    <HowItWorks/>
                </section>
            </div>
        )
    }
}

export default Home