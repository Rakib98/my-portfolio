import React from 'react';

import CardInfo from '../components/CardInfo';
import Card from 'react-bootstrap/Card';

function Cards(props) {

    return (
        <div className="outside-card pr-4">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.item.imgSrc} />
                <Card.Body>
                    <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} code={props.item.code} />
                </Card.Body>
            </Card>
        </div>
    );

}

export default Cards;