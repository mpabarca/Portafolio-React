import React, {Component} from 'react';
import './about.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

class About extends Component{

    render(){
        return(
            <div className="About">
                <Container>
                    <Col><Image></Image></Col>
                    <Col>
                        <Row>about Me</Row>
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
                </Container>

            </div>
            
        )
    }
}

export default About;