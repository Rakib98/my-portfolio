import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12} className="wrapper">
            {props.title && (
              <h1 className="display-1 font-weight-bold">{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className="display-5 font-weight-light">{props.subTitle}</h2>
            )}
            {/*  {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
            {props.git && (
              <h3 className="lead font-weight-light">{props.git}</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
