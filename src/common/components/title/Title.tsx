import React from 'react';
import style from './Title.module.scss';


function Title(props: any) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;


