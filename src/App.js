import React, { Component } from 'react';
import './App.css';
import Home from './component-home/Home';
import "materialize-css/dist/js/materialize.min.js";

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
