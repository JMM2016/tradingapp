import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{color: 'white'}}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type='primary'>test</Button>
      </div>
    );
  }
}

export default App;
