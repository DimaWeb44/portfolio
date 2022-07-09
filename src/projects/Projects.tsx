import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import img from '../assets/image/SOCIAL_NETWORK.jpg'
import img2 from '../assets/image/TODOLIST.jpg'

const Fade = require("react-reveal/Fade");


function Projects() {

    const socialNetworkStyle = {
        backgroundImage: `url(${img})`,
    };

    const todolistStyle = {
        backgroundImage: `url(${img2})`,
    };

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Fade left>
                    <Title title={'My Projects'}/>
                </Fade>
                <Fade right>
                    <div className={style.projects}>
                        <Project style={socialNetworkStyle} title={'Social network'}
                                 link={'https://github.com/DimaWeb44/social_network'}
                                 description={'Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik; Bug fixing, deployin.'}/>
                        <Project style={todolistStyle} title={'Todolist'} link={'https://github.com/DimaWeb44/todolist'}
                                 description={'Stack: TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deployin; Covering code with unit tests.'}/>
                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default Projects;


