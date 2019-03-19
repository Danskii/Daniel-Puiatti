
import React, { Component } from 'react';
import { render } from 'react-dom';
import Accordion from '../components/Accordian';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Testimonials from '../components/Testimonials';

class Skills extends Component {
  render() {
    return (
      <div className="Services">
      <div className="servicesWrapper">
        <Container >
          <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={require('../images/icons/web-development.png')} />
                </Card.Body>
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    From landing pages to full fleged websites, social media
                    widgets to front-end design.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
              <Card.Body>
          <Card.Img variant="top" src={require('../images/icons/seo.png')} />
          </Card.Body>
                <Card.Body>
              
                  <Card.Title>SEO</Card.Title>
                  <Card.Text>
                    Looking for a rock solid way to increase traffic to your
                    website month over month?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                <Card.Img variant="top" src={require('../images/icons/online-advertising.png')} />
                </Card.Body>
                <Card.Body>
                  <Card.Title>Online Advertising</Card.Title>
                  <Card.Text>
                    Reach your target audience and meet your advertising
                    objectives all at an affordable rate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
      
      
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={require('../images/icons/social-media.png')} />
                </Card.Body>
                <Card.Body>
                  <Card.Title>Social Media</Card.Title>
                  <Card.Text>
                    Take your brand awareness to the next level with
                    engaging and vibrant content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={require('../images/icons/design.png')} />
                </Card.Body>
                <Card.Body>
                  <Card.Title>Graphic Design</Card.Title>
                  <Card.Text>
                    Appropriate and effective design is essential to how an
                    audience percieves your brand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={require('../images/icons/copy-writing.png')} />
                </Card.Body>
                <Card.Body>
                  <Card.Title>Copywriting and Editing</Card.Title>
                  <Card.Text>
                    Clear, concise and compelling. I can draft, edit and
                    optimize copy that gets results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
        <Testimonials />
      </div>
      
    );
}
}

export default Skills;
