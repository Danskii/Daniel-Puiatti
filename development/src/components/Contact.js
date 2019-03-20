import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2>Contact</h2>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>;
      </div>
    );
  }
}

export default Contact;
