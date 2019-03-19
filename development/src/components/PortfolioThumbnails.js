import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashLink as Link } from 'react-router-hash-link';

class PortfolioThumbnails extends Component {
  render() {
    return (
      <div className="PortfolioThumbnails">
 
<Container fluid>
  <Row>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#professionallyspeaking">
      <Image src={require('../images/professionally-speaking.jpg')} thumbnail fluid />
      </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#dpPhotography">
    <Image src={require('../images/daniel-puiatti-photography.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#toBikeFixit">
    <Image src={require('../images/toronto-bike-fixit-map.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#danskii">
    <Image src={require('../images/danskii.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#gradientgen">
    <Image src={require('../images/gradient-background-generator.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#accessible">
    <Image src={require('../images/making-pdfs-aoda-compliant.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#opshop">
    <Image src={require('../images/outpost-magazine-shop.jpg')} thumbnail fluid />
    </Link>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3}>
    <Link to="/portfolio#dpportfolio">
    <Image src={require('../images/daniel-puiatti-portfolio.jpg')} thumbnail fluid />
    </Link>
    </Col>
  </Row>
</Container>
      </div>
    );
  }
}

export default PortfolioThumbnails;

