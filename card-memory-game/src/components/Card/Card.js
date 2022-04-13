import React from 'react';
import style from './Card.module.scss';

const Card = ({card}) => {
    return <div className={[style.Card, style[card.value], style[card.isFlipped ? 'flipped' : 'unflipped']].join(' ')}></div>
}

export default Card;
