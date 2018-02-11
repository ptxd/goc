import React, { Component } from 'react'
import {
    Grid,
    Image,
    Segment
  } from 'semantic-ui-react'

class HowItWorks extends Component {
    render () {
        return (
            <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <p className="hiw-header">The Guild</p>
                            <p className="hiw-p1">
                            The Guild of Cryptocurrencies or GCC is a nonprofit organization with the goal of uniting supporters of cryptocurrencies and decentralized technologies towards more common goals in developing cryptocurrencies and decentralized technologies as a viable solution to various use cases in the new Financial Technology world.
                            </p>
                            <p className="hiw-p1">
                            The Guild aims to be a standards body as opposed to a regulatory body. The Guild believes that a free market will always self-regulate provided with the right guidance. It will propose standards for improvement in terms of cryptocurrency development, provide advisory to regulatory authorities in regards to crypto related activities, support technological improvement within the space, create awareness and educate the public on the benefits of cryptocurrencies..
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6} className="hiw-image">
                            <Image
                            bordered
                            rounded
                            size='large'
                            src={require('../images/guildimageedit.png')}
                            />
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default HowItWorks