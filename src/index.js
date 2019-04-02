import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import Home from './component-home/Home';
import About from './component-aboutMe/About';
import Skills from './component-skills/Skills';
import Projects from './component-projects/Projects';
import Contact from './component-contact/Contact';

ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={App} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        </div>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
