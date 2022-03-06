import React from 'react';
import style from './Project.module.css';

function Project(props: any) {
    return (
              <div className={style.project}>
                  <div className={style.icon}>
                      <button className={style.buttonIcon}>browse</button>
                  </div>
                  <h3>{props.title}</h3>
                  <span className={style.description}>{props.description}</span>
              </div>
    );
}

export default Project;


