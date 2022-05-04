import React from 'react';
import style from './Form.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Form() {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <h2 className={style.title}>CONTACT</h2>
                    <form action="" method="get" className={style.form}>
                        <input type={"text"} placeholder={'Name'} required/>
                        <input type={"email"} placeholder={'email'}/>
                        <textarea placeholder={'Text'}/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
    );
}

export default Form;


