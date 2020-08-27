import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>This website is developed by Anish</h3>
        </div>
        <p className="App-intro">
          Hi There, bye there
        </p>
      </div>
    );
  }
}

export default App;
