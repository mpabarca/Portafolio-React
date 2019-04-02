import React, {Component} from 'react';
import './about.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Navbar from '../component-navbar/Navbar';

const aboutButton = {
    background:'#7a2828',
    border: 'none',
    borderRadius: 0,
    fontFamily: "'Merriweather', serif",
    fontWeight:'600',
    height: 'auto',
    marginTop: '10%'
  };

const aboutText = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '300',
    fontSize: '20px'
};

class About extends Component{

    render(){
        return(
            <div className="About">
                <Navbar/>
                <Container>
                    <Col><Image></Image></Col>
                    <Col>
                        <Row id="about-tittle">about Me</Row>
                        <Row style={aboutText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum."
                        </Row>
                        <Row>
                            <Col><Button style={aboutButton}>Sp'</Button></Col>
                            <Col><Button style={aboutButton}>En'</Button></Col>
                        </Row>
                    </Col>
                </Container>

            </div>
            
        )
    }
}

export default About;