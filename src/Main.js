import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Route, HashRouter } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NavigationSide from "./NavigationSide";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        
          
          <Jumbotron className="splash">
            <Container>
            <Row className="splashText">
            <h1>Hello, world!</h1>
            </Row>
            <Row>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
                </p>
            </Row>
                
                
            </Container>      
          </Jumbotron>
          
          <NavigationSide />
          <Container className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />

        </Container>
      </HashRouter>
    );
  }
}

export default Main;
