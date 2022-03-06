import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footer}>
                <h2 className={style.title}>Dmitry Petukhov</h2>
                    <div className={style.socialNetworks}>
                        <div className={style.socialNetworkIcon}></div>
                        <div className={style.socialNetworkIcon}></div>
                        <div className={style.socialNetworkIcon}></div>
                        <div className={style.socialNetworkIcon}></div>
                    </div>
                    <span>Copyright © 2022. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

