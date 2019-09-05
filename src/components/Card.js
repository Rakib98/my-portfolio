import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block c-card">
            <img className="c-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} code={props.item.code}/>
        </div>
    );

}

export default Card;