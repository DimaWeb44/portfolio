import React from 'react';
import BurgerNav from './burgerNav/BurgerNav';
import style from './Header.module.scss';
import Nav from "./nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}

export default Header;
