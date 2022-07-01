import React, { useRef, useState ,forwardRef} from 'react';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import { motion, useAnimation, useTransform } from "framer-motion";

const RoundedButton = styled(motion.div)`
    background-color: #0a0c11;
    display: flex;
    border : 2px white;
    justify-content: center;
    align-items: center;
    align-text: center;
    height: 75px;
    color: white;
    text-size: 6.5rem;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 75px;
    border-radius: 50%;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 650px) {
        height: 50px;
        width: 50px;
    }
`

const HomeSection = ({resultRef}) => {

          const AboutRef = React.createRef();

          const placeholderText = [
                    { type: "heading1", text: "I am Chadi Naour" },
                    { type: "heading2", text: "Front-end Web developer" },
                    { type: "paragraph", text: " — UI/UX designer" },
                ];
                const container = {
                    visible: {
                        transition: {
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

    return (
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
          <div className="absolute pb-8 pt-2 flex justify-center items-center left-0 bottom-0 w-full text-xl bg-dark select-none" >
              <RoundedButton onClick={() => scrollToSection()} whileHover={{
                  scale: 1.2,
                  backgroundColor: "white",
                  color: "black",
              }}>ↆ</RoundedButton>
          </div>
      </section>
    )
}
export default HomeSection