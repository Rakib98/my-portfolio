import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function CardInfo(props) {
  return (
    <div>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.subTitle}</Card.Text>
      <div className="col-md-12">
        {!props.link ? (
          ""
        ) : (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Button variant="success" className="btn-block">
              Demo
            </Button>
          </a>
        )}

        <a href={props.code} target="_blank" rel="noopener noreferrer">
          <Button variant="dark" className="btn-block mt-1">
            GitHub
          </Button>
        </a>
      </div>
    </div>
  );
}

export default CardInfo;
