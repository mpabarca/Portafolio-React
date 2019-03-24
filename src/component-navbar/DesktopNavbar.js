import React, { Component } from "react";
import Home from '../component-home/Home';
import About from '../component-aboutMe/About';
import Skills from '../component-skills/Skills';
import Projects from '../component-projects/Projects';
import Contact from '../component-contact/Contact';

class DesktopNavbar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">LOGO</a>
                        <ul className="left hide-on-med-and-down">
                            <li><a href={<Home/>}>HOME</a></li>
                            <li><a href={<About/>}>ABOUT ME</a></li>
                            <li><a href={<Skills/>}>SKILLS</a></li>
                            <li><a href={<Projects/>}>PROJECTS</a></li>
                            <li><a href={<Contact/>}>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default DesktopNavbar;
