import React, { Component } from 'react';
import './App.css';
import Home from './component-home/Home';
import About from './component-aboutMe/About';
import Skills from './component-skills/Skills';
import Projects from './component-projects/Projects';
import Contact from './component-contact/Contact';
import Navbar from './component-navbar/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
