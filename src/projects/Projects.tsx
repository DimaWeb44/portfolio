import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import img from '../assets/image/TODOLIST.jpg'
import img2 from '../assets/image/ananas.png'
import img3 from '../assets/image/Art-lichnost.png'

const Fade = require("react-reveal/Fade");


function Projects() {

    const todolistStyle = {backgroundImage: `url(${img})`,};
    const ananasStyle = {backgroundImage: `url(${img2})`,};
    const artLichnostStyle = {backgroundImage: `url(${img3})`,};

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Fade bottom>
                    <Title title={'My Projects'}/>
                </Fade>
                <Fade bottom>
                    <div className={style.projects}>
                        <Project style={artLichnostStyle} title={'Art-lichnost'}
                                 link={'https://art-lichnost.ru/'}
                                 description={'Stack: TypeScript, Next.js, WordPress, Formik, Yup. Full site development.'}/>
                        <Project style={ananasStyle} title={'My Ananas'} link={'https://myananas.ru/'}
                                 description={'Stack: HTML, CSS, JavaScript; \n' +
                                 'Redesign and layout of the main and technical pages.'}/>
                        <Project style={todolistStyle} title={'Todolist'} link={'https://github.com/DimaWeb44/todolist'}
                                 description={'Stack: TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deployin; Covering code with unit tests.'}/>
                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default Projects;


