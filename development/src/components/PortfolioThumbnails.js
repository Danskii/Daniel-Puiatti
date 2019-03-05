import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class PortfolioThumbnails extends Component {
  render() {
    return (
      <div className="PortfolioThumbnails">
 
<Container>
  <Row>
    <Col xs={12} sm={4} md={4} lg={3}>
      <Image src={require('../images/professionally-speaking.jpg')} thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src={require('../images/daniel-puiatti-photography.jpg')} thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src={require('../images/toronto-bike-fixit-map.jpg')} thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src={require('../images/danskii.jpg')} thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src={require('../images/gradient-background-generator.jpg')} thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src="https://via.placeholder.com/350?text=outpostmagazine" thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src="https://via.placeholder.com/350?text=opxpeditions" thumbnail fluid />
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Image src="https://via.placeholder.com/350?text=website" thumbnail fluid />
    </Col>
  </Row>
</Container>;
      </div>
    );
  }
}

export default PortfolioThumbnails;

