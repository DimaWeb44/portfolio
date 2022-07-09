import React, {useState} from 'react';
import style from './Form.module.scss';
import Title from '../common/components/title/Title';
import emailjs from 'emailjs-com';
// @ts-ignore
import {useAlert} from 'react-alert'

const Fade = require("react-reveal/Fade");

function Form() {
    const alert = useAlert()

    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('service_orglwzv', 'template_zxsh76h', e.target, 'mJk74dGKagW2L7pH_')
            .then((result: any) => {
                alert.show('Successfully!')
            }, (error: any) => {
                console.log(error.text);
            });
    }

    return (
        <div id="form" className={style.formBlock}>
            <div className={style.formContainer}>
                <Fade bottom>
                    <Title title="Contact"/>
                </Fade>
                <Fade bottom cascade>
                    <form onSubmit={sendEmail} className={style.form}>
                        <input name="from_name" type={"text"} placeholder={'Name'} className={style.formArea} required/>
                        <input name="from_email" type={"email"} placeholder={'email'} className={style.formArea}/>
                        <textarea name="message" placeholder={'Message'} className={style.messageArea}/>
                        <button  type="submit"
                                className={style.buttonSubmit}>Send message
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Form;


