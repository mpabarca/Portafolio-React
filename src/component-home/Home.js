import React, {Component} from 'react'
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="Home" id="home">
                <div className="container">
                    <h4>I am</h4>
                    <h2>maría'Paz</h2>
                    <h5>A junior Front-End development</h5>
                    <button>CONTACT ME  <i class="far fa-envelope"></i></button>
                </div>
            </div>
        )
    }
}
export default Home;
