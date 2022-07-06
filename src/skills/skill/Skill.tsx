import React from 'react';
import style from './Skill.module.scss';
import Tilt from 'react-parallax-tilt';

function Skill(props: any) {
    return (
        <Tilt >
        <div className={style.skill}>
            <div className={style.icon}>{props.skill}</div>
            <h3 className={style.skillTitle}>{props.title}</h3>
        </div>
        </Tilt>
    );
}

export default Skill;


