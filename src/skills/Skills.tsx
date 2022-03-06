import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
          <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <h2 className={style.title}>My Skills</h2>
              <div className={style.skills}>
                  <Skill title={'React'} description={'Lorem Ipsum is simply dummy text of the printing ' +
                  'and typesetting industrys standard'}/>
                  <Skill title={'TypeScript'} description={'Lorem Ipsum is simply dummy text of the printing ' +
                  'and typesetting industry.'}/>
                  <Skill title={'JavaScript'} description={'Lorem Ipsum  printing ' +
                  'and typesetting industry. Lorem Ipsum has been the industrys standard'}/>
                  <Skill title={'Redux'} description={'Lorem Ipsum  printing ' +
                  'and typesetting industry. Lorem Ipsum has been the industrys standard'}/>
                  <Skill title={'HTML'} description={'Lorem Ipsum  printing ' +
                  'and typesetting industry. Lorem Ipsum has been the industrys standard'}/>
                  <Skill title={'CSS'} description={'Lorem Ipsum  printing ' +
                  'and typesetting industry. Lorem Ipsum has been the industrys standard'}/>
              </div>
          </div>
        </div>
    );
}

export default Skills;


