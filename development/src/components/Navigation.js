import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import Blog from "./Blog";
import Connect from "./Connect";
import Portfolio from "./Portfolio";
import Services from "./Services";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Router>
          <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Link to="/">
                  <Nav.Link href="/home">Home</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/portfolio">
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/services">
                  <Nav.Link href="/services">Services </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog">
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/connect">
                  <Nav.Link href="/connect">Connect</Nav.Link>
                  </Link>
              </Nav.Item>
            </Nav>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/connect" component={Connect} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
