import React, {Component} from 'react'
import './home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends Component{

    render(){
        return(
            <div id="home">
                <Container id="home-container">
                    <Row id="home-iam">I am</Row>
                    <Row id="home-name">maría'Paz</Row>
                    <Row id="home-rol">A junior Front-End development</Row>
                    <Row><Button id="home-button">  CONTACT ME  <i class="far fa-envelope"></i>  </Button></Row>
                </Container>
            </div>
        )
    }
}
export default Home;
