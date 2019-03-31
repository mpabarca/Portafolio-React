import React, {Component} from 'react';
import './contact.css';
import {Container, Col, Row} from 'react-bootstrap';

class Contact extends Component{

    render(){
        return(
            <div id="Contact">
                <Container>
                    <Row>
                        <Col><a target="blank" href="https://www.instagram.com/pacita_tua/"><i class="fab fa-instagram"></i></a></Col>
                        <Col><a target="blank" href="https://www.facebook.com/pazhycold"><i class="fab fa-facebook-f"></i></a></Col>
                        <Col><a><i class="fab fa-linkedin-in"></i></a></Col>
                        <Col><a target="blank" href="https://github.com/mpabarca"><i class="fab fa-github"></i></a></Col>
                    </Row>
                    <Row>mpabarca@uc.cl</Row>
                </Container>
                <Container><Row>
                    <a target="blank" href="https://github.com/mpabarca/Portafolio/tree/master/src">Repositorio portafolio</a>
                </Row></Container>
            </div>
        )
    }
}

export default Contact;