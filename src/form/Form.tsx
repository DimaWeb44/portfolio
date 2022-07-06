import React from 'react';
import style from './Form.module.scss';
import Title from '../common/components/title/Title';
const Fade = require("react-reveal/Fade");

function Form() {
    return (
        <div id="form" className={style.formBlock}>
            <div className={style.formContainer}>
                <Fade right>
                    <Title title="Contact"/>
                </Fade>
                <Fade  left cascade>
                <form action="" method="get" className={style.form}>
                    <input type={"text"} placeholder={'Name'} className={style.formArea} required/>
                    <input type={"email"} placeholder={'email'} className={style.formArea}/>
                    <textarea placeholder={'Message'} className={style.messageArea}/>
                    <button type="submit">Send message</button>
                </form>
                </Fade>
            </div>
        </div>
    )
}

export default Form;


