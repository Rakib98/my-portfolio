import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function CardInfo(props) {


    return (
        <div>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.subTitle}
            </Card.Text>
            <div className="button-box col-lg-12">
                {
                    !props.link ? '' : (<a href={props.link} target="_blank" rel="noopener noreferrer" className="pr-2"><Button variant="success" className="col-md-5">Demo</Button></a>)
                }

                <a href={props.code} target="_blank" rel="noopener noreferrer"><Button variant="dark" className="col-md-5">GitHub</Button></a>
            </div>
        </div>
    );

}

export default CardInfo;