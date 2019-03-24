import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

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
                        <li><a className="waves-effect" href="#!">HOME</a></li>
                        <li><a className="waves-effect" href="#!">ABOUT ME</a></li>
                        <li><a className="waves-effect" href="#!">SKILLS</a></li>
                        <li><a className="waves-effect" href="#!">PROJECTS</a></li>
                        <li><a className="waves-effect" href="#!">CONTACT</a></li>
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