import React, { Component } from "react"
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar'

class Navbar extends Component{

    render(){
        let widthScreen= window.screen.width;
        const printNavbar = (widthScreen>992 ? (<DesktopNavbar/>):(<MobileNavbar/>));
        console.log(printNavbar);
        return(
            <div>
                {printNavbar}
            </div>
            
        )
    }
}

export default Navbar;
