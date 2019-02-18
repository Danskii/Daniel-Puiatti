import React, { Component } from 'react';
import './Styles.css';
import Nav from 'react-bootstrap/Nav';



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
      </div>
    );
  }
}

export default Home;
