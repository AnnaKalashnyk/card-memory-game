import React from 'react';
import style from './Button.module.scss';

const Button = ({buttonText, onClickHandler}) => {
    return <button className={style.Button} onClick={onClickHandler}>{buttonText}</button>
}

export default Button;
