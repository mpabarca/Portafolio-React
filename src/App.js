import React, { Component } from 'react';
import './App.css';
import Home from './component-home/Home';
import "materialize-css/dist/js/materialize.min.js";
import Navbar from './component-navbar/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home />
      </div>
    );
  }
}

export default App;
