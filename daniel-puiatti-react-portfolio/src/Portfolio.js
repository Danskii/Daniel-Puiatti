import React, { Component } from 'react';
import './Styles.css';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';



class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
     <Nav variant="pills" justify="true">
  <Nav.Item>
    <Nav.Link eventKey="1" href="/home">Daniel Puiatti</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" href="/portfolio">portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3">blog</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="4">contact</Nav.Link>
  </Nav.Item>
</Nav>

      </div>
    );
  }
}

export default Portfolio;
