import React, {Component} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav id="Navbar" className="navbar navbar-expand-md navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <Link to="/home"><li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li></Link>
                            <Link to="/about"><li className="nav-item">
                                <a className="nav-link" href="#">ABOUT ME</a>
                            </li></Link>
                            <Link to="/skills"><li className="nav-item">
                                <a className="nav-link" href="#">SKILLS</a>
                            </li></Link>
                            <Link to="/projects"><li className="nav-item">
                                <a className="nav-link" href="#">PROJECTS</a>
                            </li></Link>
                            <Link to="/contact"><li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li></Link> 
                        </ul>
                    </div>  
                    <a className="navbar-brand" href="#">LOGO</a>
                </nav>
            </div>
        )
    }
}
export default Navbar;