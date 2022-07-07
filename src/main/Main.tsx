import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Tilt from 'react-parallax-tilt';
const Fade = require("react-reveal/Fade");
const particlesInit = async (main: any) => {
    await loadFull(main);
};


function Main() {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.tsparticles} init={particlesInit} options={{
                background: {
                    color: {
                        value: "rgb(31,31,32)",
                    },
                },
                fpsLimit: 120,
                fullScreen: { enable: false, zIndex: -1},
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 50,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#7c7c7c",
                    },
                    links: {
                        color: "#7c7c7c",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "text",
                    },
                    size: {
                        value: {min: 1, max: 5},
                    },
                },
                detectRetina: true,
            }} />
            <div className={style.container}>
                <Fade left cascade>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <span>I am <span>Dmitry Petukhov</span></span>
                    <h1>Frontend Developer</h1>
                </div>
                </Fade>
                <Fade right>
                <Tilt tiltReverse={true}>
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                </Tilt>
                    </Fade>
            </div>
        </div>
    );
}

export default Main;


