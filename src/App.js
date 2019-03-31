import React, { Component } from 'react';
import './App.css';
import Home from './component-home/Home';
import About from './component-aboutMe/About';

class App extends Component {

  render() {
    return (
      <div className="App">
        <About />
      </div>
    );
  }
}

export default App;
