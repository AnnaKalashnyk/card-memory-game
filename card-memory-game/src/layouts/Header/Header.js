import React from 'react';
import style from './Header.module.scss'
import Steps from "../../components/Steps/Steps";

const Header = () => {
    return <header className={style.Header}>
                <div className={style.Header__container}>
                    <div className={style.Header__logo}>Sailor Moon</div>
                    <Steps/>
                </div>
    </header>
}

export default Header;
