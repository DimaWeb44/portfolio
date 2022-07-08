import React from 'react';
import style from './Project.module.scss';
import { AnimationWrapper } from 'react-hover-animation'

function Project(props: any) {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a href={props.link} style={props.style} className={style.img}></a>
                <a href={props.link} className={style.imageTitle}>DEMO</a>
            </div>

            <div className={style.projectInfo}>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;


