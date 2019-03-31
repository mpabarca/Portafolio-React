import React, {Component} from 'react';
import './skills.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

class Skills extends Component{

    render(){
        return(
            <div id="Skills">
                <Container>
                    <Row>
                        <Col>
                            <Row>skills</Row>
                            <Row>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum."
                            </Row>
                            <Row>
                                <Col><Button>Sp'</Button></Col>
                                <Col><Button>En'</Button></Col>
                            </Row>
                        </Col>
                        <Col>
                            <i class="devicon-css3-plain-wordmark"></i>
                            <i class="devicon-git-plain-wordmark"></i>
                            <i class="devicon-github-plain-wordmark"></i>
                            <i class="devicon-html5-plain-wordmark"></i>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-nodejs-plain-wordmark"></i>
                            <i class="devicon-python-plain-wordmark"></i>
                            <i class="devicon-react-original-wordmark"></i>
                            <i class="devicon-trello-plain-wordmark"></i>
                            <i class="devicon-visualstudio-plain-wordmark"></i>
                            <i class="devicon-mocha-plain"></i>
                            <i class="devicon-ubuntu-plain-wordmark"></i>
                            <i class="devicon-bootstrap-plain-wordmark"></i>
                            

                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Skills;