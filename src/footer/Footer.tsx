import React from 'react';
import style from './Footer.module.scss';
import Title from '../common/components/title/Title';
import {FiGithub} from 'react-icons/fi';
import {FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa';
import {SiCodewars} from 'react-icons/si';
import {GrLinkedinOption} from 'react-icons/gr';

const Fade = require("react-reveal/Fade");

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Fade right> < Title className={style.title} title="Dmitry Petukhov"/> </Fade>
                <Fade left cascade>
                    <div className={style.socialNetworks}>
                        <div className={style.socialNetworkIcon}>
                            <a href={'https://www.linkedin.com/in/dmitry-petukhov-5269b2230/'}>
                                <GrLinkedinOption className={style.icons}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={'https://github.com/DimaWeb44'}>
                                <FiGithub className={style.icons}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={'https://t.me/DimaWeb44'}>
                                <FaTelegramPlane className={style.icons}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={'https://www.codewars.com/users/DimaWeb44'}>
                                <SiCodewars className={style.icons}/>
                            </a>
                        </div>
                    </div>
                </Fade>
                <span className={style.copyright}>Copyright © 2022. All Rights Reserved</span>
            </div>

        </div>
    );
}

export default Footer;

