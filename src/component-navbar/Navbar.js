import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>    
                        </ul>
                    </div>  
                </nav>
            </div>
        )
    }
}
export default Navbar;