import React, { Component } from "react";

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
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT ME</a></li>
                            <li><a href="">SKILLS</a></li>
                            <li><a href="">PROJECTS</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default DesktopNavbar;
