import React from 'react';
import style from './Area.module.scss';
import Card from '../../components/Card/Card';
import {useDispatch, useSelector} from 'react-redux';

const Area = () => {
    const cards = useSelector(state => state.area.cards);
    const dispatch = useDispatch();

    return <div className={style.Area}>
        {
            cards.map((item, id) => {
                return (
                    <Card
                    key={id}
                    card={item}/>
                )
            })
        }
    </div>
}

export default Area;
