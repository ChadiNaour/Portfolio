import React from 'react';
import styles from '../styles/Home.module.css'
import SoundBar from "../components/soundBar";
import { motion } from "framer-motion"
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const RoundedButton = styled(motion.div)`
    background-color: #0a0c11;
    display: flex;
    border : 2px white;
    justify-content: center;
    align-items: center;
    height: 65px;
    color: white;
    text-size: 6.5rem;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 65px;
    border-radius: 50%;
    z-index: 0;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
`

const HeroPart = () => {
    return (
        <div className={styles.container}>
            <header className="d-flex justify-center align-center p-4 fixed z-20 top-0 left-0 w-full text-center" style={{ backgroundImage: "linear-gradient(to bottom,#000 0%,rgba(0,0,0,0) 100%)", paddingTop: "50px" }}>
                <div className="relative mx-0 my-auto px-0 py-auto w-full ">
                    <span className='font-reloadNormal text-3xl md:text-4xl text-white'>cnaour</span>
                    <div className="absolute top-0 left-0 pr-4 md:pl-10 bg-red-200"><SoundBar /></div>
                    <div className="absolute flex flex-row  top-0 right-0 pl-4 md:pr-10 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" viewBox="0 0 496 512" width={38} height={38} fill="white"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width={40} height={40} fill="white" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" /></svg>
                    </div>
                </div>
            </header>
            <main className={styles.main} style={{ backgroundColor: "#0a0c11" }}>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }} className="absolute bg-red-500 md:bg-green-500 lg:bg-blue-400 flex justify-center items-end   top-0 left-0 ml-6 md:ml-14 h-1/3">
                    <div className=' absolute font-reloadLight  text-white text-lg  md:text-2xl pl-6 md:pl-10 pt-4 -rotate-90'>home</div>
                </motion.div>
                <motion.div initial={{ height: 0 }}
                    animate={{ height: "55%" }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }} className="absolute top-1/3 left-0 w-10  bottom-10 ml-7 md:ml-14 border-l-2 border-white">
                </motion.div>
                <div className="absolute pb-8 pt-2 flex justify-center items-center left-0 bottom-0 w-full bg-dark" >
                    <RoundedButton whileHover={{
                        scale: 1.2,
                        backgroundColor: "white",
                        color: "black",
                    }}>ↆ</RoundedButton>
                </div>
            </main>
            <main className={styles.main} style={{ backgroundColor: "#0a0c11" }}>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }} className="absolute bg-red-500 md:bg-green-500 lg:bg-blue-400 flex justify-center items-end   top-0 left-0 ml-6 md:ml-14 h-1/3">
                    <div className=' absolute font-reloadLight  text-white text-lg  md:text-2xl pl-6 md:pl-10 pt-4 -rotate-90'>work</div>
                </motion.div>
                <motion.div initial={{ height: 0 }}
                    animate={{ height: "55%" }}
                    transition={{
                        opacity: { ease: "linear" },
                        delay: 1,
                        duration: 1
                    }} className="absolute top-1/3 left-0 w-10  bottom-10 ml-7 md:ml-14 border-l-2 border-white">
                </motion.div>
                <footer className={styles.footer}>
                    <span className='font-reloadLight text-graye text-lg'>© COPYRIGHT cnaour 2022</span>
                </footer>
            </main>

            {/* <footer className={styles.footer}>
                <span className='font-reloadLight text-graye text-lg'>© COPYRIGHT cnaour 2022</span>
            </footer> */}
        </div>
    );
}
export default HeroPart;