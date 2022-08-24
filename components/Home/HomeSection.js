import React, { useRef, useState, forwardRef } from 'react';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import { motion, useAnimation, useTransform } from "framer-motion";
import { Icon } from '@iconify/react';

const RoundedButton = styled(motion.div)`
    background-color: #0a0c11;
    display: flex;
    border : 2px white;
    justify-content: center;
    align-items: center;
    align-text: center;
    height: 70px;
    color: white;
    text-size: 6.5rem;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 70px;
    border-radius: 50%;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 60px;
        width: 60px;
        text-size: 5.5rem;
        font-weight: 100;
    }
    @media (max-width: 650px) {
        height: 50px;
        width: 50px;
        text-size: 4.5rem;
        font-weight: 100;
    }
`

const HomeSection = ( {resultRef} ) => {


    const placeholderText = [
        { type: "heading1", text: "I am Chadi Naour" },
        { type: "heading2", text: "Front-end Web developer" },
        { type: "paragraph", text: " — UI/UX designer" },
        // { type: "paragraph", text: "✌️" , icon : true },
    ];

    const icon = { type: "paragraph", text: "✌️" }
    const container = {
        visible: {
            transition: {
                delay: 3,
                staggerChildren: 0.025
            }
        }
    };
    const scrollToSection = () => {
        window.scroll({
            top: resultRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    // Framer Motion variant object, for controlling animation
    const item = {
        hidden: {
            y: "200%",
            color: "gray",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            color: "white",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    return (
        <motion.section className="h-full relative flex z-10  w-full flex flex-col justify-center items-center overflow-hidden ">
            <div className='hidden lg:flex'>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }}
                    className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-8 lg:ml-10 h-1/4 3xl:h-1/5">
                    <div className='hidden  sm:block absolute font-reloadLight  text-white text-md pl-6 md:pl-6 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>home</div>
                </motion.div>
                <motion.div initial={{ height: 0 }}
                    animate={{ height: "60vh" }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }} className="hidden sm:block  absolute z-10 top-1/4 3xl:top-[20%] left-0  w-10  bottom-10 ml-7 md:ml-8 lg:ml-10 border-l-[.5px] border-white">
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="z-50 flex flex-col justify-center items-center" style={{ maxWidth: "900px" }}
            >
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} icon={0} />;
                })}
                <AnimatedText {...icon} key={3} icon={1} />
            </motion.div>
            <div className='hidden sm:block absolute z-0 mx-auto p-0 font-timmons md:text-3xl'
                style={{
                    fontSize: "calc(var(--vh, 1vh) * 95)",
                    color: "#181818",
                    left: "50%",
                    position: "absolute",
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
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "0.5s opacity",
                    willChange: "transform",
                    userSelect: "none",
                }}
            >HI</div>
            <div className="absolute  pb-8 pt-2 flex justify-center items-center left-0 bottom-0 w-full text-md lg:text-xl  select-none" >
                <RoundedButton onClick={() => scrollToSection()}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "white",
                        color: "black",
                    }}
                ><Icon icon="akar-icons:arrow-down" className='w-4 h-4 md:h-5 md:w-5' /></RoundedButton>
            </div>
        </motion.section>
    )
}
export default HomeSection