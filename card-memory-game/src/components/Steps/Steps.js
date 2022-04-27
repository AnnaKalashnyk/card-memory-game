import React from 'react';
import style from './Steps.module.scss'
import {useSelector} from "react-redux";

const Steps = ({steps}) => {
    return (
        <div className={style.Steps}>
            <span className={style.Steps__title}>STEPS: </span>
            <span className={style.Steps__count}>{steps}</span>
        </div>
    )
}

export default Steps;
