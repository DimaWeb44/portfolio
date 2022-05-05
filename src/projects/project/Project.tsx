import React from 'react';
import style from './Project.module.scss';

function Project(props: any) {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.icon}>
                <button className={style.buttonIcon}>browse</button>
            </div>
            <div className={style.projectInfo}>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;


