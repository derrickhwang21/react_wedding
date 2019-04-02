import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import homeImage from "../src/images/homeImage.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    return (
      <Container>
        <Container className="homePage">
          <Row className="homeTitle">
            <h1 className="homeTitle">Come Travel With Us!</h1>
          </Row>
        </Container>
        <Container >
          <Row className="homeContent">
            <Col sm={4}>
              <img width={300} src={homeImage} alt="Generic placeholder" />
            </Col>
            <Col className="homeBody" >
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
