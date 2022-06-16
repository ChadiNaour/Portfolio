import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import SoundBar from "../components/soundBar";
import { motion, useAnimation, useTransform } from "framer-motion"
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import AnimatedText from "../components/AnimatedText";
import { useInView } from 'react-intersection-observer';
import RedTetris from "../public/redTetris.png";
import Logo from "../public/logo.png"
import Image from 'next/image'

const RoundedButton = styled(motion.div)`
    background-color: #0a0c11;
    display: flex;
    border : 2px white;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: white;
    text-size: 6.5rem;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 70px;
    border-radius: 50%;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 700;
    cursor: pointer;
    // overflow: hidden;
    @media (max-width: 650px) {
        height: 50px;
        width: 50px;
    }
`

const HeroPart = () => {
    const animation = useAnimation();
    const animation1 = useAnimation();
    // const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
    const projectsRef = useRef();
    const { ref, inView } = useInView();

    const typeVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                opacity: { ease: "linear" },
                delay: 0.2,
                duration: 0.5
            }
        }
    }
    const lineVariants = {
        hidden: {
            height: 0,
        },
        visible: {
            height: "60vh",
            transition: {
                opacity: { ease: "linear" },
                delay: 0.6,
                duration: 1
            }
        }
    }

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const scrollToSection = (elementRef) => {
        window.scroll({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            animation1.start("visible");
        }
        if (!inView) {
            animation.start("hidden");
            animation1.start("hidden");
        }
    }, [inView, animation])

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, []);

    const placeholderText = [
        { type: "heading1", text: "I am Chadi Naour" },
        { type: "heading2", text: "Full stack Web developer" },
        { type: "paragraph", text: " — UI/UX designer" },
    ];
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 4, duration: 4 }} className={styles.container}>
            {/* Header section */}
            <header className="d-flex justify-center align-center p-4 fixed z-20 top-0 left-0 w-full text-center" style={{ backgroundImage: "linear-gradient(to bottom,#000 0%,rgba(0,0,0,0) 100%)", paddingTop: "50px" }}>
                <div className="relative mx-0 my-auto px-0 py-auto w-full ">
                    <span className='font-reloadNormal text-2xl md:text-4xl text-white select-none'>cnaour</span>
                    <div className="absolute top-0 left-0 pr-4 md:pl-10"><SoundBar /></div>
                    <div className="absolute flex flex-row  top-0 right-0 pl-4 md:pr-10 ">
                        <motion.div whileHover={{
                            scale: 1.2,
                        }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-7 h-7 lg:w-10 lg:h-10 lg:mr-2 " viewBox="0 0 496 512" fill="white"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </motion.div>
                        <motion.div whileHover={{
                            scale: 1.2,
                        }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-7 h-7 lg:w-10 lg:h-10 lg:mr-2" fill="white" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" /></svg>
                        </motion.div>
                    </div>
                </div>
            </header >
            {/* Home section */}
            <section className="h-screen relative flex z-10  w-full flex flex-col justify-center items-center overflow-hidden bg-dark">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 3,
                        duration: 1
                    }} className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-14 h-1/4 3xl:h-1/4">
                    <div className='hidden sm:block absolute font-reloadLight  text-white text-lg  md:text-2xl pl-6 md:pl-10 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>home</div>
                </motion.div>
                <motion.div initial={{ height: 0 }}
                    animate={{ height: "60%" }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 3,
                        duration: 1
                    }} className="hidden sm:block absolute z-10 top-1/4 3xl:top-1/4  h-1/2 left-0  w-10  bottom-10 ml-7 md:ml-14 border-l-2 border-white">
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="z-50 " style={{ maxWidth: "900px" }}
                >
                    {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })}
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 2.5,
                        duration: 2,
                        userSelect: "none",
                    }} className=" text-4xl md:text-5xl lg:text-7xl  mt-4  z-10 select-none" >✌️</motion.div>
                <div className='hidden sm:block absolute z-0 mx-auto p-0 font-timmons md:text-6xl'
                    style={{
                        fontSize: "calc(var(--vh, 1vh) * 95)",
                        color: "#181818",
                        left: "50%",
                        position: "fixed",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "0.5s opacity",
                        willChange: "transform",
                        userSelect: "none",
                    }}
                >HELLO</div>
                <div className='absolute z-0 mx-auto p-0 font-timmons md:text-6xl sm:hidden'
                    style={{
                        fontSize: "calc(var(--vh, 1vh) * 95)",
                        color: "#181818",
                        left: "50%",
                        position: "fixed",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "0.5s opacity",
                        willChange: "transform",
                        userSelect: "none",
                    }}
                >HI</div>
                <div className="absolute pb-8 pt-2 flex justify-center items-center left-0 bottom-0 w-full bg-dark select-none" >
                    <RoundedButton onClick={() => scrollToSection(projectsRef)} whileHover={{
                        scale: 1.2,
                        backgroundColor: "white",
                        color: "black",
                    }}>ↆ</RoundedButton>
                </div>
            </section>
            {/* Projects section */}
            <section ref={projectsRef} className="h-screen relative flex z-10  w-full flex justify-center items-center overflow-hidden bg-dark">
                <div ref={ref}>
                    <motion.div animate={animation} initial="hidden" variants={typeVariants}
                        className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-14 h-1/4 3xl:h-1/4">
                        <div className='hidden sm:block absolute font-reloadLight  text-white text-lg  md:text-2xl pl-6 md:pl-10 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>work</div>
                    </motion.div>
                    <motion.div animate={animation1} initial="hidden" variants={lineVariants}
                        className="hidden sm:block absolute z-10 top-1/4 3xl:top-1/4 left-0  w-10  bottom-10 ml-7 md:ml-14 border-l-2 border-white">
                    </motion.div>
                </div>
                <div className='w-3/5 h-1/2 z-20 rounded-lg relative flex flex-col items-center shadow-2xl' style={{ backgroundColor: "#2B2B2B" }}>
                    <div className="h-1/5 w-full">
                        <div className="absolute right-0 mr-8 mt-8  top-0"><span className='text-white text-2xl font-reloadLight'>1 /  5</span></div>
                    </div>
                    <div className="h-3/5 w-full px-20 flex flex-row">
                        <div className="relative h-full w-1/3 rounded-lg p-2 flex justify-center items-center">
                            <Image layout="fill" className="object-cover" src={RedTetris} />
                            <Image width={90} height={70} src={Logo} />
                        </div>
                        <div className="h-full w-2/3 flex flex-col justify-start">
                            <span className='text-white font-reloadBold text-5xl ml-12 mt-4 line tracking-wider'>Red Tetris</span>
                            <span className='text-gray-50 font-reloadLight text-2xl ml-12 mt-4'>multiplayer web game based on tetris game provides creating
                                rooms to play with other users duisghuisdg juiswedhgisdghn jisdhgijsdh jsdhjkdsbhgjkdbh</span>
                            <div className=" w-1/2 px-2 flex flex-row justify-between items-center ml-12 mt-6">
                                <Icon height={40} color="white" icon="akar-icons:react-fill" />
                                <Icon height={40} color="white" icon="akar-icons:redux-fill" />
                                <Icon height={40} color="white" icon="akar-icons:node-fill" />
                                <Icon height={40} color="white" icon="cib:socket-io" />
                            </div>
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row justify-end'>
                        <div className=" h-full w-1/3 flex justify-end items-center pb-6 mr-10">
                            <button className='px-6 py-3 bg-white flex flex-row justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6 mr-2 " viewBox="0 0 496 512" fill="black"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                <span className='text-black font-reloadLight mt-1'>repo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" width={20} height={20} className="ml-4 " viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='hidden sm:block  absolute z-0 mx-auto p-0 font-timmons md:text-6xl'
                    style={{
                        fontSize: "calc(var(--vh, 1vh) * 80)",
                        color: "#181818",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "0.5s opacity",
                        willChange: "transform",
                        userSelect: "none",
                    }}
                >PROJECTS</div>
                <div className='block absolute z-0 mx-auto p-0 font-timmons md:text-6xl sm:hidden'
                    style={{
                        fontSize: "calc(var(--vh, 1vh) * 20)",
                        color: "#181818",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "0.5s opacity",
                        willChange: "transform",
                        userSelect: "none",
                    }}
                >PROJECTS</div>
                <footer className={styles.footer}>
                    <div className="mb-6 h-14 z-10 w-1/3 bg-dark">wetwe</div>
                    <div className="mb-6 h-14 w-1/3 flex justify-center items-center">
                        <div className=" h-14 z-10 w-2/5 bg-dark"></div>
                        <div className='flex flex-col  justify-between items-end  h-14 w-1/5'>
                            <motion.div initial={{ x: 150 }} animate={{ x: -150 }}
                                transition={{
                                    opacity: 0,
                                    delay: 0.6,
                                    duration: 2,
                                    repeat: Infinity,
                                    // repeatType: "reverse",
                                }} className="h-1 bg-red-600 w-full"></motion.div>
                            <span className='text-2xl font-cinetype text-white mx-auto'>DRAG</span>
                        </div>
                        <div className="h-14 z-10 w-2/5 bg-dark"></div>
                    </div>
                    <div className=" mb-6 h-14 z-10 w-1/3 bg-dark">sfwry</div>
                </footer>
            </section>
        </motion.div >
    );
}
export default HeroPart;