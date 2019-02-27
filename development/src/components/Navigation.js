import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Portfolio from './Portfolio';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">





       
       <Router>
    <div>


<Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
  <Link to="/"><Nav.Link href="/home">Home</Nav.Link></Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/portfolio"><Nav.Link href="/portfolio">Portfolio</Nav.Link></Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/blog"><Nav.Link href="/blog">Blog</Nav.Link></Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/contact"><Nav.Link href="/contact">Contact</Nav.Link></Link>
  </Nav.Item>
</Nav>;
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>

      </div>
      
    );
  }
}

export default Navigation;
