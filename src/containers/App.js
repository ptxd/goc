import React, { Component } from 'react';
import gccLogo from '../image/Guild_of_Cryptocurrency/Finalized Version/Guild Icon text white.png';
import '../scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <div className="jumbotron">
          <img src={gccLogo} alt="gcc-logo" style={{height:"100px",width:"100px, textAlign:left"}}/>
        </div>
      </div>
    );
  }
}

export default App;
