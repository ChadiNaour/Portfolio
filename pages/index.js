import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SoundBar from "../components/soundBar"
import SoundBar2 from "../components/soundBar2"
import styled, { keyframes } from 'styled-components'
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from '@iconify/react';


const Circle = styled.div`
  border-radius: 50%;
  z-index: 0;
  background-color: rgba(0,0,0,.35);
  stroke: white;
  border: 2px solid rgba(255,255,255,.35);
  fill: black;
  width: 70px;
  height: 70px;
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);

  @keyframes scaleIn {
    from {
      transform: scale(.5, .5);
      border: 2px solid rgba(255,255,255,.35);
      opacity: .6;
    }
    to {
      transform: scale(7.5, 7.5);
      border: 1px solid rgba(255,255,255,.35);
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`
const RoundedButton = styled(motion.div)`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: #000;
    box-shadow: 0 0 0 0 #fff, inset 0 0 0 1px #fff;
    width: 70px;
    border-radius: 50%;
    z-index: 0;
    font-family: reload,arial narrow,Arial,Helvetica,sans-serif;
    font-weight: 300;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
`

export default function Home() {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <>
      <Head>
        <title>Nchadi</title>
        <meta
          name="description"
          content="I am Naour Chadi, a front-end developer"
        />
        <link rel="icon" href="/my.ico" />
      </Head>
      <AnimatePresence className={styles.container}>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -200, delay: 5, duration: 5 }} className={styles.main} style={{ background: "linear-gradient(190deg, #0A0C11 70%, #323232 120.3%" }}>
          <motion.div className="absolute" animate={{ y: -220 }}
            transition={{
              delay: 4,
              duration: 1
            }}
          >
            <h1 className="blackMirror" data-text="hello world"><span>hello world</span></h1>
          </motion.div>
          <motion.div
            className="flex absolute flex-col mt-0 justify-center  text-center " style={{ width: "250px" }}>
            <motion.div initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { ease: "linear" },
                delay: 6,
                duration: 1
              }}>
              <div className=' flex justify-center pb-6'>
                <SoundBar2 />
              </div>
              <div className=''>
                <h1 className="font-reloadLight text-white text-md md:text-lg z-8">
                  for the better experience, turn up your volume.
                </h1>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { ease: "linear" },
                delay: 5,
                duration: 3
              }} className='flex justify-center mt-4 lg:mt-6 z-0  h-40'>
              <Circle style={{ animationDelay: "0s" }}></Circle>
              <Circle style={{ animationDelay: "1s" }}></Circle>
              <Circle style={{ animationDelay: "2s" }}></Circle>
              <Circle style={{ animationDelay: "3s" }}></Circle>
              <Link href="/home">
                <RoundedButton
                  // onClick={() => {
                  //             router.push({
                  //                 pathname: '/home',
                  //                query: { click: click, onClick: onClick },
                  //             }) 
                  // }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "black",
                    color: "white",
                    transition: "linear",
                }}
                  ><Icon icon="akar-icons:arrow-right" width={22} height={22} /></RoundedButton>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { ease: "linear" },
              delay: 5,
              duration: 4
            }}
            className='absolute cursor-pointer left-0 bottom-0  w-full pb-16 flex justify-center md:justify-end md:pr-14'>
            <div>
              <span className='font-reloadLight text-white text-md md:text-lg flex flex-row justify-center items-center '><svg viewBox="0 0 640 512" fill="white" height={24} width={24} className="mr-4"><path d="M633.82 458.1l-69-53.33C592.42 360.8 608 309.68 608 256c0-95.33-47.73-183.58-127.65-236.03-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 42.78-11.96 83.59-33.22 119.06l-38.12-29.46C503.49 318.68 512 288.06 512 256c0-63.09-32.06-122.09-85.77-156.16-11.19-7.09-26.03-3.8-33.12 7.41-7.09 11.2-3.78 26.03 7.41 33.13C440.27 165.59 464 209.44 464 256c0 21.21-5.03 41.57-14.2 59.88l-39.56-30.58c3.38-9.35 5.76-19.07 5.76-29.3 0-31.88-17.53-61.33-45.77-76.88-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61 11.76 6.46 19.12 18.18 20.4 31.06L288 190.82V88.02c0-21.46-25.96-31.98-40.97-16.97l-49.71 49.7L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM32 184v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V352.6L43.76 163.84C36.86 168.05 32 175.32 32 184z"></path></svg>continue without sound<svg xmlns="http://www.w3.org/2000/svg" fill="white" width={20} height={20} className="ml-4 " viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
