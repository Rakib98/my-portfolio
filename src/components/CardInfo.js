import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="c-card-info" style={style}>
            <p className="c-card-title">{props.title}</p>
            <p className="c-card-sub-title">{props.subTitle}</p>

            {
                !props.link ? '' : (<a href={props.link} target="_blank" rel="noopener noreferrer" className="pr-2">Demo</a>)
            }

            
            <a href={props.code} target="_blank" rel="noopener noreferrer">GitHub</a>
        </animated.div>
    );

}

export default CardInfo;