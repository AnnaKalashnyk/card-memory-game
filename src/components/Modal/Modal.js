import React from 'react';
import classes from './Modal.module.scss';

const Modal = ({isVisible, steps}) => {
    return <div className={[classes.Modal, classes[isVisible ? 'show' : 'hide']].join(' ')}>
                <div className={classes.Modal__content}>
                    <p className={classes.Modal__title}>You win!</p>
                    <p className={classes.Modal__text}>Result: {steps}</p>
                </div>
    </div>
}

export default Modal;
