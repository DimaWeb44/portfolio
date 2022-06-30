import React from 'react';
import style from './Footer.module.scss';
import Title from '../common/components/title/Title';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title title="Dmitry Petukhov"/>
                <div className={style.socialNetworks}>
                        <div className={style.socialNetworkIcon}>
                            <a href={''}>
                                <img src={''} alt={''}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={''}>
                                <img src={''} alt={''}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={''}>
                                <img src={''} alt={''}/>
                            </a>
                        </div>
                        <div className={style.socialNetworkIcon}>
                            <a href={''}>
                                <img src={''} alt={''}/>
                            </a>
                        </div>
                </div>
                <span className={style.copyright}>Copyright © 2022. All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;

