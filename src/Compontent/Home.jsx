import "./Style.css"
import React from "react";
import Particles from "@tsparticles/react";
import img from "../Compontent/img/My.png"
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Home = React.forwardRef((props, ref) => {
    const containerRef = useRef(null), [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    const particlesLoaded = useCallback(
        (container) => {
            containerRef.current = container;

            window.particlesContainer = container;
        },
        [containerRef]
    ),
        options = useMemo(
            () => ({
                fullScreen: {
                    zIndex: -1,
                },
                particles: {
                    number: {
                        value: 20,
                    },
                    links: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                    },
                },
                themes: [
                    {
                        name: "light",
                        default: {
                            value: true,
                            auto: true,
                            mode: "light",
                        },
                        options: {
                            background: {
                                color: "#ffffff",
                            },
                            particles: {
                                color: {
                                    value: "#000000",
                                },
                                links: {
                                    color: "#000000",
                                },
                            },
                        },
                    },
                    {
                        name: "dark",
                        default: {
                            value: true,
                            auto: true,
                            mode: "dark",
                        },
                        options: {
                            background: {
                                color: "#000000",
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                },
                            },
                        },
                    },
                ],
            }),
            []
        ),
        lightTheme = () => {
            containerRef.current?.loadTheme("light");
        },
        darkTheme = () => {
            containerRef.current?.loadTheme("dark");
        };

    //const [height, setHeight] = useState(window.innerHeight);

    //  useEffect(() => {
    // const handleResize = () => setHeight(window.innerHeight);
    // window.addEventListener("resize", handleResize);
    //return () => window.removeEventListener("resize", handleResize);
    // }, []);

    

    return (
        <div id="home" className="home-container">


            <section ref={ref} className="content">
                <div className="text-home-continer">
                    <h1>Hi, I’m <span>Sam Mojumder Apo</span></h1>
                    <h3 >I'm a MERN Stack Developer</h3>
                    <p>a passionate web developer based in bangladesh.Here,you'll get a glimps e of <br />my journey in the world of web development,Where creativity meets functionality.</p>
                    <button>Explore More</button>
                    <div className="icons-home">
                        <div className="fa-con"><a href="https://www.facebook.com/apo.mojumder/"><span className="fa"><FaFacebook /></span></a> </div>
                        <div className="in-con"><a href="https://www.instagram.com/samapo419/"><span className="in"><FaInstagramSquare /></span></a></div>
                        <div className="gi-con"><a href="https://github.com/ap514-cst/"><span className="gi"><FaGithubSquare /></span></a></div>
                        <div className="li-con"><a href="https://www.linkedin.com/in/sam-apo-6322b4319/"> <span className="li"><FaLinkedin /></span></a></div>
                    </div>
                    

                </div>
                <div className="my-img">
                    <img src={img} alt="" />
                </div>

            </section>


            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}

        </div>
    );
});

export default Home;

