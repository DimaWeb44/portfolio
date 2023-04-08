import React from 'react';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from '../common/components/title/Title';
import {
    SiCss3,
    SiDiagramsdotnet, SiGit, SiHtml5, SiJavascript, SiMaterialui, SiPostman, SiReact, SiRedux,
    SiSpeedtest, SiStorybook, SiTypescript
} from 'react-icons/si';

const Fade = require("react-reveal/Fade");

function Skills() {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Fade bottom>
                    <Title title={'Skills'}/>
                </Fade>
                <div className={style.skills}>
                    <Fade bottom>
                        <Skill title={'React'} skill={<SiReact/>}/>
                        <Skill title={'Redux'} skill={<SiRedux/>}/>
                        <Skill title={'TypeScript'} skill={<SiTypescript/>}/>
                        <Skill title={'JavaScript'} skill={<SiJavascript/>}/>
                        <Skill title={'HTML'} skill={<SiHtml5/>}/>
                        <Skill title={'CSS/SCSS'} skill={<SiCss3/>}/>
                        <Skill title={'REST API'} skill={<SiDiagramsdotnet/>}/>
                        <Skill title={'Unit testing'} skill={<SiSpeedtest/>}/>
                        <Skill title={'StoryBook'} skill={<SiStorybook/>}/>
                        <Skill title={'Postman'} skill={<SiPostman/>}/>
                        <Skill title={'Material-UI'} skill={<SiMaterialui/>}/>
                        <Skill title={'Git'} skill={<SiGit/>}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;


