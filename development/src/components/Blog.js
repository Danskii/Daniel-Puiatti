import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
<CardDeck>
  <Card>
    <Card.Img variant="top" src={require('../images/blog/index-images/reaching-your-target-audience-with-content-marketing.jpg')} />


    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read me >>></small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src={require('../images/blog/index-images/identifying-your-target-audience.jpg')} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read me >>></small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src={require('../images/blog/index-images/starting-a-brand-from-scratch.jpg')} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read me >>></small>
    </Card.Footer>
  </Card>
</CardDeck>
       
      </div>
    );
  }
}

export default Blog;
