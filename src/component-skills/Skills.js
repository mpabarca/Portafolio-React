import React, {Component} from 'react';
import './skills.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Navbar from '../component-navbar/Navbar';

const skillsButton = {
    background:'#7a2828',
    border: 'none',
    borderRadius: 0,
    fontFamily: "'Merriweather', serif",
    fontWeight:'600',
    height: 'auto',
    marginTop: '10%'
  };

const skillsText = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '300',
    fontSize: '25px'
};
const skillsIcon = {
    fontSize:'500%'
  };
const skillsGroupIcon = {
    marginTop: '5%'
};


class Skills extends Component{

    render(){
        return(
            <div id="Skills">
                <Navbar/>
                <Container>
                    <Row>
                        <Col>
                            <Row id="skills-tittle">skills</Row>
                            <Row tyle={skillsText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum."
                            </Row>
                            <Row>
                                <Col><Button style={skillsButton}>Sp'</Button></Col>
                                <Col><Button style={skillsButton}>En'</Button></Col>
                            </Row>
                        </Col>
                        <Col style={skillsGroupIcon}>
                            <Row>
                                <Col><i style={skillsIcon} class="devicon-html5-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-javascript-plain"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-react-original-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-python-plain-wordmark"></i></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col><i style={skillsIcon} class="devicon-css3-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-bootstrap-plain-wordmark"></i></Col>
                                <Col></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col><i style={skillsIcon} class="devicon-git-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-github-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-nodejs-plain-wordmark"></i></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col><i style={skillsIcon} class="devicon-ubuntu-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-visualstudio-plain-wordmark"></i></Col>
                                <Col><i style={skillsIcon} class="devicon-trello-plain-wordmark"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Skills;