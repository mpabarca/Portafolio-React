import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="Home" id="home">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">LOGO</a>
                        <ul className="right hide-on-med-and-down">
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

export default Home;
