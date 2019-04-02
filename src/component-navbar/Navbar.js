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
                            <li className="nav-item">
                                <Link to="/home"><a className="nav-link" href="#">HOME</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"><a className="nav-link" href="#">ABOUT ME</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills"><a className="nav-link" href="#">SKILLS</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects"><a className="nav-link" href="#">PROJECTS</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"><a className="nav-link" href="#">CONTACT</a></Link>
                            </li>    
                        </ul>
                    </div>  
                    <a className="navbar-brand" href="#">LOGO</a>
                </nav>
            </div>
        )
    }
}
export default Navbar;