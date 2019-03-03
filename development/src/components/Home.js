import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="Home">
<Jumbotron fluid>
  <Container>
  <span className="danielPuiattiProfileImage">
  <Image src={require('../images/daniel-puiatti.jpg')} roundedCircle fluid />
  </span>
    <h1>Hi, I'm Dan Puiatti</h1>
    <p>I help people and businesses use digital media to accomplish goals.</p>
    <p>I have been fortunate to to have had direct experience with nearly every aspect of digital media: from web development to online advertising, social media to SEO, copywriting to design.</p>
  <p>Please take a moment to explore some of my <Link to="/portfolio">digital media projects</Link>.</p>
  </Container>
</Jumbotron>
<Container>
  <Row>
    <Col>
      <Image src="https://via.placeholder.com/150" thumbnail />
    </Col>
    <Col>
      <Image src="https://via.placeholder.com/150" thumbnail />
    </Col>
    <Col>
      <Image src="https://via.placeholder.com/150" thumbnail />
    </Col>
    <Col>
      <Image src="https://via.placeholder.com/150" thumbnail />
    </Col>    <Col>
      <Image src="https://via.placeholder.com/150" thumbnail />
    </Col>


  </Row>
</Container>;
      </div>
    );
  }
}

export default Home;

