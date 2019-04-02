import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyWidget from "./MyWidget";
import homeImage from "../src/images/homeImage.jpg";

class Stuff extends Component {
  render() {
    return (
      <Container>
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
        <Row>
          <Col sm>
            <table class="GeneratedTable">
              <thead>
                <tr>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
        <h1>Find Your Flight</h1>
          <Col sm>
            <MyWidget />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Stuff;
