import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from '../component-home/Home';
import About from '../component-aboutMe/About';
import Skills from '../component-skills/Skills';
import Projects from '../component-projects/Projects';
import Contact from '../component-contact/Contact';

class MobileNavbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "right",
            inDuration: 250
        });
    }

    render() {
        return (
            <div className="row">
                <div className="left">
                    <a href="#" className="brand-logo right">LOGO</a>
                </div>
                <div className="right">
                    <ul id="slide-out" className="sidenav">
                        <li><a className="waves-effect" href={<Home/>}>HOME</a></li>
                        <li><a className="waves-effect" href={<About/>}>ABOUT ME</a></li>
                        <li><a className="waves-effect" href={<Skills/>}>SKILLS</a></li>
                        <li><a className="waves-effect" href={<Projects/>}>PROJECTS</a></li>
                        <li><a className="waves-effect" href={<Contact/>}>CONTACT</a></li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </div>
        );
    }
}

export default MobileNavbar;