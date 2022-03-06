import React from 'react';
import style from './Form.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Form() {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <h2 className={style.title}>CONTACT</h2>
                    <form action="" method="get" className={style.form}>
                        <label htmlFor="name">Enter your name: </label>
                        <input type={"text"} required/>
                        <label htmlFor="email">Enter your email: </label>
                        <input type={"email"}/>
                        <textarea/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
    );
}

export default Form;


