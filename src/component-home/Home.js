import React, {Component} from 'react'
import './home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends Component{

    render(){
        return(
            <div id="home">
                <Container id="home-container">
                    <Row><h4>I am</h4></Row>
                    <Row><h2>maría'Paz</h2></Row>
                    <Row><h5>A junior Front-End development</h5></Row>
                    <Row><Button>CONTACT ME  <i class="far fa-envelope"></i></Button></Row>
                </Container>
            </div>
        )
    }
}
export default Home;
