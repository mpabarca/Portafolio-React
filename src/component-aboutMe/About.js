import React, {Component} from 'react';
import './about.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class About extends Component{

    render(){
        return(
            <div className="About">
                <Container>
                    <Col></Col>
                    <Col>
                        <Row></Row>
                        <Row></Row>
                        <Row></Row>
                    </Col>
                </Container>

            </div>
            
        )
    }
}

export default About;