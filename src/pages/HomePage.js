import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Container from "react-bootstrap/Container";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        git={props.git}
      />
      <Carousel />
      <Container>
        <hr />
        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
        {props.git && <h3 className="lead font-weight-light">{props.git}</h3>}
      </Container>
    </div>
  );
}

export default HomePage;
