import React, { Component } from 'react'
import { Container,Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class HeaderComponent extends Component {
    render () {
        return (
              <Container fluid>
                <Menu stackable>
                  <Menu.Item>
                    <img src={require('../images/black text.svg')} width='50' height ='50' alt="Guild of Cryptocurrencies logo"/>
                  </Menu.Item>
                  <Menu.Item><Link to="/">Home</Link></Menu.Item>
                  <Menu.Item><Link to="/domain">Buy Domain</Link></Menu.Item>
                </Menu>
              </Container>
        )
    }
}

export default HeaderComponent