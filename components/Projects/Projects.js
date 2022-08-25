import React, { useRef, useEffect, forwardRef, useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image'
// import AnimatedText from './AnimatedText';
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import ProjectStyle from '../../styles/Projects.module.css';
import Projects from './ProjectsDetails';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { InView } from 'react-intersection-observer'

const RoundedButton = styled(motion.div)`
    background-color: #0a0c11;
    display: flex;
    border : 2px white;
    justify-content: center;
    align-items: center;
    align-text: center;
    height: 90px;
    color: white;
    text-size: 6.5rem;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 90px;
    border-radius: 50%;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 650px) {
        height: 50px;
        width: 50px;
    }
`

const ProjectsSection = ({ }) => {

    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 1 });
    const from = useMotionValue(0)

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

    useEffect(() => {
        if (inView1) {
            animation2.start("visible");
            animation3.start("visible");
            return () => { animation2.stop; animation3.stop }
        }
        if (!inView1) {
            animation2.start("hidden");
            animation3.start("hidden");
        }
    }, [inView1, animation2])

    return (
        <section className="h-full w-auto overflow-visible relative flex flex-row z-10 bg-dark">
            <div className="hidden lg:flex">
                <motion.div animate={animation2} initial="hidden" variants={typeVariants}
                    className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-8 lg:ml-10 h-1/4 3xl:h-1/5">
                    <div className='hidden  sm:block absolute font-reloadLight  text-white text-md pl-6 md:pl-6 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>Work</div>
                </motion.div>
                <motion.div animate={animation3} initial="hidden" variants={lineVariants}
                    className="hidden sm:block  absolute z-10 top-1/4 3xl:top-[20%] left-0  w-10  bottom-10 ml-7 md:ml-8 lg:ml-10 border-l-[1px] border-white">
                </motion.div>
            </div>
            <div className='hidden sm:block  absolute z-0 mx-auto p-0 font-timmons md:text-6xl'
                style={{
                    fontSize: "calc(var(--vh, 1vh) * 95)",
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
            <Swiper className="mySwiper cursor-grab">
                {Projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className={`w-screen h-full flex justify-center z-20 items-center`}>
                            <div className='w-[90%] h-3/4 md:w-[90vw] lg:w-4/5 xl:w-3/5 md:h-[45vh] lg:h-1/2 z-20 rounded-md md:rounded-lg relative flex flex-col items-center shadow-2xl' key={index} style={{ backgroundColor: "#2B2B2B" }}>
                                <div className="h-[10%] md:h-1/6 xl:h-1/5 w-full ">
                                    <div className="absolute  right-0 mr-5 mt-6 xl:mr-8 xl:mt-8  top-0"><span className='text-white text-xl xl:text-2xl font-reloadLight'>{index + 1} / 5</span></div>
                                </div>
                                <div className="h-[75%]  pt-4 md:pt-0 md:h-4/6 w-full md:px-12  xl:px-20  flex flex-col md:flex-row justify-start md:justify-center xl:justify-start items-center">
                                    <div className="relative bg-gray-400 h-48 w-48 md:h-[30vh] md:w-[30vh] lg:h-[33vh] lg:w-[33vh] flex justify-center items-center">
                                        <Image layout="fill" src={project.image} />
                                    </div>
                                    <div className="md:h-full md:h-full w-full mt-2 md:w-2/3 flex flex-col justify-start">
                                        <span className='text-white text-center md:text-left  font-reloadBold text-[2em] md:text-3xl lg:text-4xl md:ml-6 xl:ml-12 tracking-wider lg:mb-2'>{project.name}</span>
                                        <span className='text-gray-50 text-center md:text-left font-cinetype text-xl md:text-xl  lg:text-2xl xl:text-[1.7rem] px-3 md:px-0 md:ml-6 xl:ml-12 leading-normal md:leading-normal lg:leading-norm xl:leading-normal 2xl:leading-normal tracking-wider'>{project.description}</span>
                                        <div className="w-auto z-50  flex flex-row gap-3 md:gap-5 justify-center md:justify-start  items-center md:ml-6 xl:ml-12 mt-4 md:mt-3 lg:mt-5 xl:mt-6">
                                            {project.stack.map((stack, index) => (
                                                <div key={index} className='w-auto z-50 relative group cursor-pointer flex justify-center items-center' >
                                                    {stack.name !== "Simple DirectMedia Layer" ? <Icon className='z-50 h-8 w-8 lg:h-10 lg:w-10' key={index} icon={stack.icon} style={{ color: "white" }} /> : <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="white" d="M18.787 27.148H9.672l7.213-18.755h3.454l-5.902 15.345h5.683l-1.333 3.41zM2 19.344l1.2-3.3a4.129 4.129 0 0 0 1.53 1.137a4.89 4.89 0 0 0 1.989.372a5.9 5.9 0 0 0 1.137-.109a3.6 3.6 0 0 0 .9-.306a1.8 1.8 0 0 0 .634-.481a1.685 1.685 0 0 0 .372-.59A1.172 1.172 0 0 0 9.8 15.3a1.66 1.66 0 0 0-.437-.634a5.171 5.171 0 0 0-.809-.568c-.328-.175-.678-.372-1.071-.546a3.814 3.814 0 0 1-1.945-1.771a3.349 3.349 0 0 1 .066-2.514a6.006 6.006 0 0 1 1.18-1.989A6.879 6.879 0 0 1 8.557 5.9a8.121 8.121 0 0 1 2.143-.785a10.318 10.318 0 0 1 2.317-.262a13.481 13.481 0 0 1 2.011.131a5.655 5.655 0 0 1 1.486.437L15.4 8.5a2.5 2.5 0 0 0-.656-.459a4.246 4.246 0 0 0-.787-.328a6 6 0 0 0-.852-.2a6.317 6.317 0 0 0-1.924.066a3.6 3.6 0 0 0-.9.306a2.534 2.534 0 0 0-.678.481a1.834 1.834 0 0 0-.393.612a.992.992 0 0 0-.044.656a1.606 1.606 0 0 0 .35.568a3.877 3.877 0 0 0 .7.525a10.049 10.049 0 0 0 .984.525a7.434 7.434 0 0 1 1.311.787a3.531 3.531 0 0 1 .874.94a2.2 2.2 0 0 1 .328 1.2a4.528 4.528 0 0 1-.306 1.574a5.876 5.876 0 0 1-1.224 2.077a6.589 6.589 0 0 1-1.771 1.355a7.771 7.771 0 0 1-2.142.743a11.943 11.943 0 0 1-2.339.219a12.16 12.16 0 0 1-2.251-.2A5.027 5.027 0 0 1 2 19.344Z" /><path fill="white" d="m17.738 17.2l-1.049 2.71h1.989a10.989 10.989 0 0 0 6.492-2.077a11.394 11.394 0 0 0 4.175-5.53q2.623-7.213-5.268-7.213h-5.246l-.984 2.71h4.984a3.319 3.319 0 0 1 2.995 1.224a3.706 3.706 0 0 1 .022 3.322a7.675 7.675 0 0 1-2.514 3.541a6.179 6.179 0 0 1-3.869 1.313h-1.727" /></svg>}
                                                    <span className="inline-block font-cinetype absolute scale-0 w-auto group-hover:scale-100 -bottom-12 z-50 py-2 px-3 text-sm text-white bg-graye rounded-lg shadow-sm duration-300">
                                                        {stack.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[15%]  md:h-1/6 xl:h-1/5 w-full flex justify-center flex-row md:justify-end'>
                                    <div className="h-full  md:w-1/2 xl:w-1/3 flex md:justify-end items-center md:items-center xl:items-start  md:pb-4 mx-4 xl:mr-10">
                                        <a className={`${ProjectStyle.btn} ${ProjectStyle.btnCircle} h-10 w-28 sm:h-10 sm:w-32  xl:h-11 xl:w-40 2xl:h-12 2xl:w-44`} href={project.link} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`${ProjectStyle.Icon} w-[1.2rem] h-[1.2rem] mr-2`} viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                            <span className='cotet z-20 font-reloadLight mt-1 text-sm lg:text-[1rem] flex flex-row items-center'>repo</span>
                                            <svg fill="black" className={`${ProjectStyle.arrow} w-4 h-4 xl:w-4 xl:h-4  ml-3`} viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
                                        </a>
                                        <a className={`${ProjectStyle.btn2} ${ProjectStyle.btnCircle2} h-10 w-28 sm:h-10 sm:w-32  xl:h-11 xl:w-40 2xl:h-12 2xl:w-44 ml-5 cursor-pointer`}>
                                            <span className='cotet z-20 font-reloadLight mt-1 text-sm lg:text-[1rem] flex flex-row items-center'>See more</span>
                                            <svg fill="black" className={`${ProjectStyle.arrow2} w-4 h-4 xl:w-4 xl:h-4  ml-3`} viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </motion.div> */}
            {/* <div className="absolute  pb-8 pt-2 flex justify-center items-center left-0 bottom-0 font-reloadLight text-graye w-full text-md lg:text-md  select-none" >
                <span>© Copyright 2022 Designed & developed by nchadi</span>
            </div> */}
            {/* </motion.main> */}
            <div ref={ref1} className="absolute h-20 md:h-28   flex justify-center items-start left-0 bottom-0 w-full text-lg select-none" >
                <div className="h-12 w-96   flex justify-start items-start">
                    <div className=" h-full z-10 w-2/5 bg-dark"></div>
                    <div className='flex flex-col  justify-center gap-3 items-start  h-full w-1/5'>
                        <motion.div initial={{ x: 150 }} animate={{ x: -150 }}
                            transition={{
                                opacity: 0,
                                delay: 0.6,
                                duration: 2,
                                repeat: Infinity,
                            }} className="h-[3px] bg-white w-full"></motion.div>
                        <span className='text-xl md:text-2xl z-1 font-cinetype text-white mx-auto'>DRAG</span>
                    </div>
                    <div className="h-full z-10 w-2/5 bg-dark"></div>
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection