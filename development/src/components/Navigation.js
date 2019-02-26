import React from 'react';
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


const Navigation = () => {
    return (
        <div>
<Nav justify>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/portfolio" >Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/blog">Blog</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}


export default Navigation;