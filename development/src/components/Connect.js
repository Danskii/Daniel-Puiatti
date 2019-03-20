import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { render } from "react-dom";
import Accordion from "./Accordian";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class Connect extends Component {
  render() {
    return (
      <div className="Connect">
 <Container>
            <Row>
              <Col xs={12} sm={6} md={6} lg={3}>
              <a
                href="mailto:dpuiatti@gmail.com">
                <Card>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={require("../images/icons/message.png")}
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Email</Card.Title>
  
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
              <a
                href="https://twitter.com/Dpuiatti" target="_blank">
                <Card>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={require("../images/icons/twitter.png")}
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Twitter</Card.Title>

                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
              <a
                href="https://www.linkedin.com/in/daniel-puiatti-15688312/" target="_blank">
                <Card>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={require("../images/icons/linkedin.png")}
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>LinkedIn</Card.Title>
    
                  </Card.Body>
                </Card>
                </a>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
              <a
                href="https://github.com/Danskii" target="_blank">
                <Card>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={require("../images/icons/github.png")}
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>GitHub</Card.Title>
 
                  </Card.Body>
                </Card>
                </a>
              </Col>
            
            </Row>
          </Container>
      </div>
    );
  }
}

export default Connect;
