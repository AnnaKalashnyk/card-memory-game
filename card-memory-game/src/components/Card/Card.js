import React from 'react';
import classes from './Card.module.scss';

const Card = ({card, onClickHandler}) => {

    return <div
        className={[classes.Card, classes[card.isFlipped ? 'face-up' : 'face-down']].join(' ')}
        onClick={onClickHandler}>
        {
            card.isFlipped ? <div className={[classes[card.value], classes['flipped']].join(' ')}></div> : <div className={classes['unflipped']}></div>
        }
    </div>
}

export default Card;
