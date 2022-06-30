import React from 'react';
import style from './Form.module.scss';
import Title from '../common/components/title/Title';

function Form() {
    return (
        <div className={style.formBlock}>
            <div className={style.formContainer}>
                <Title title="Contact"/>
                <form action="" method="get" className={style.form}>
                    <input type={"text"} placeholder={'Name'} className={style.formArea} required/>
                    <input type={"email"} placeholder={'email'} className={style.formArea}/>
                    <textarea placeholder={'Message'} className={style.messageArea}/>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Form;


