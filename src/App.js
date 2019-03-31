import React, { Component } from 'react';
import './App.css';
import Home from './component-home/Home';
import About from './component-aboutMe/About';
import Skills from './component-skills/Skills';
import Projects from './component-projects/Projects';
import Contacts from './component-contact/Contact';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}

export default App;
