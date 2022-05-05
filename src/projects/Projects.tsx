import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import img from '../assets/image/look.com.ua-200911.jpg'
import img2 from '../assets/image/look.com.ua-191288.jpg'



function Projects() {

    const socialNetworkStyle = {
        backgroundImage: `url(${img})`,
    };

    const todolistStyle = {
        backgroundImage: `url(${img2})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project style={socialNetworkStyle} title={'Social network'} description={'Lorem Ipsum is simply dummy text of the printing ' +
                    'and typesetting industrys standard'}/>
                    <Project style={todolistStyle} title={'Todolist'} description={'Lorem Ipsum is simply dummy text of the printing ' +
                    'and typesetting industry.'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;


