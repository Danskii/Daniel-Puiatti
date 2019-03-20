import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Blog1 from "../components/posts/Blog1";
import Blog2 from "../components/posts/Blog2";
import Blog3 from "../components/posts/Blog3";

class BlogIndex extends Component {
  render() {
    return (

      <HashRouter>
      <div className="BlogIndex">
     

     
        <CardDeck>
          <Card>
            {/* <Card.Img
              variant="top"
              src={require("../images/blog/index-images/reaching-your-target-audience-with-content-marketing.jpg")}
            /> */}

            <Card.Body>
              <Card.Title>Reaching your target audience with content marketing</Card.Title>
              <Card.Text>
              Any seasoned brand-builder will tell you that knowing your target audience is not enough. You must also reach them. And if you can consistently reach them, then you are well on your way to building a brand.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <NavLink to="/Blog3">
              <small className="text-muted">Read me >>></small>
              </NavLink>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img
              variant="top"
              src={require("../images/blog/index-images/identifying-your-target-audience.jpg")}
            /> */}
            <Card.Body>
              <Card.Title>Identifying your target audience</Card.Title>
              <Card.Text>
              Whether you are selling high-end shoes, making dog yoga videos or writing about how you built a brand from scratch, knowing your target audience is absolutely essential.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <NavLink to="/Blog2">
              <small className="text-muted">Read me >>></small>
              </NavLink>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img
              variant="top"
              src={require("../images/blog/index-images/starting-a-brand-from-scratch.jpg")}
            /> */}
            <Card.Body>
              <Card.Title>Starting a brand from scratch</Card.Title>
              <Card.Text>
              Starting a brand from scratch takes grit. Starting a brand from scratch is no joke.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <NavLink to="/Blog1">
              <small className="text-muted">Read me >>></small>
              </NavLink>
            </Card.Footer>
          </Card>

        </CardDeck>
        <div className="blogIndexWrapper">
    
            <Route path="/Blog1" component={Blog1} />
            <Route path="/Blog2" component={Blog2} />
            <Route path="/Blog3" component={Blog3} />

        </div>
      </div>
      
      </HashRouter>
    );
  }
}

export default BlogIndex;
