import React, { Component } from 'react';
import './Styles.css';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';



class Home extends Component {
  render() {
    return (
      <div className="Home">
     <Nav variant="pills" justify="true">
     <Nav.Item>
    <Nav.Link eventKey="1" href="/home">Daniel Puiatti</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" href="/portfolio">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3">Blog</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="4">Contact</Nav.Link>
  </Nav.Item>
</Nav>
<Jumbotron fluid>
<Container className="jumbotronContainerWrapper">
<Image src="/images/daniel-puiatti.jpg" roundedCircle fluid />
</Container>
  <Container>
    <h2> Hi, I'm Daniel Puiatti.</h2>
 
    <p>
  I help folks just like you use digital media to accomplish goals. 
    </p>

  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
    <h2>Digital media and more...</h2>
    <p>
    <p>Over the last 10-years I have been incredibly fortunate to have worked on many interesting projects.</p>
    <p>From online advertising to web development, social media to content writing, I guarantee I can help you get the most out of digital.</p>
    </p>

  </Container>
</Jumbotron>;
<Jumbotron fluid>
  <Container>
    <h1>How can I help?</h1>
    <p>
    
    <p>From online advertising to web development, social media to content writing, I guarantee I can help you get the most out of digital.</p>
    </p>

  </Container>
</Jumbotron>
<Jumbotron fluid>
  <Container>
    <h1>How can I help?</h1>
    <p>
    Hi, I'm Daniel Puiatti. I help people and businesses use digital media to accomplish goals.
    </p>
    <p>From online advertising to web development, social media to content writing, I guarantee I can help you get the most out of digital.</p>
  </Container>
</Jumbotron>
      </div>
    );
  }
}

export default Home;
