import React, { Component } from "react"
import Sidebar from './Sidebar';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.sizeScreen=this.sizeScreen.bind(this);
    }

    sizeScreen(){
        console.log(window.screen.width);
        console.log(window.screen.height);

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
                <Sidebar />
                <button onClick={this.sizeScreen}>Size</button>
            </div>
            
        )
    }
}

export default Navbar;