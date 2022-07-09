import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
// @ts-ignore
import {Link} from "react-scroll";


function BurgerNav() {
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const burgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    onClick={burgerBtnClick}
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    onClick={burgerBtnClick}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills</Link>
                <Link
                    onClick={burgerBtnClick}
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects</Link>
                <Link
                    onClick={burgerBtnClick}
                    activeClass={style.active}
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact</Link>
            </div>
            <div onClick={burgerBtnClick} className={style.burgerBtn}>{menuIsOpen ? <AiOutlineClose/> :
                <GiHamburgerMenu/>}</div>
        </div>
    );
}

export default BurgerNav;


