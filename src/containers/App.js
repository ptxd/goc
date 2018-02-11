import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from '../HOCs/home'
import Domain from '../HOCs/domain'
import ContactUs from '../HOCs/contact'
import HeaderComponent from '../component/header'
import Footer from '../component/footer'

//import css below
import '../scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><HeaderComponent/></header>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/buydomain" component={Domain}></Route>
            <Route exact path="/contactus" component={ContactUs}></Route>
        </Switch>
        <footer><Footer/></footer>
      </div>
    );
  }
}

export default App;
