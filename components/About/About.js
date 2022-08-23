import React, { useRef, useEffect, forwardRef, useState } from 'react'
import Image from 'next/image'
import Memoji from "../../public/memoji.png"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import AboutStyles from "../../styles/About.module.css";
import Resume from './resume';
import { Icon } from '@iconify/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const AboutSection = forwardRef((props, AboutRef) => {
  const animation = useAnimation();
  const animation1 = useAnimation();
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(false);
  const [displayedQuote, setDisplayedQuote] = useState({ text: "Do it or dont, there is no try", author: "Yoda" });
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 4000);
    return () => clearInterval(interval);
  })

  const quotes = [
    { text: "Do it or dont, there is no try", author: "Yoda" },
    { text: "Every great dream begins with a dreamer", author: "Harriet Tubman" },
    { text: "We must act out passion before we can feel it.", author: "J.P sartre" },
  ]

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
    console.log("about in view", inView);
    if (inView) {
      animation.start("visible");
      animation1.start("visible");
      return () => { animation.stop; animation1.stop }
    }
    if (!inView) {
      animation.start("hidden");
      animation1.start("hidden");
    }
  }, [inView, animation])

  return (
    <section ref={AboutRef} className="h-full relative flex z-10  w-full flex flex-col justify-center items-center overflow-hidden bg-dark">
      <Resume open={open} setOpen={setOpen} ></Resume>
      <div ref={ref} className="hidden lg:flex">
        <motion.div animate={animation} initial="hidden" variants={typeVariants}
          className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-8 lg:ml-10 h-1/4 3xl:h-1/5">
          <div className='hidden  sm:block absolute font-reloadLight  text-white text-lg  md:text-lg pl-6 md:pl-6 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>about</div>
        </motion.div>
        <motion.div animate={animation1} initial="hidden" variants={lineVariants}
          className="hidden sm:block  absolute z-10 top-1/4 3xl:top-[20%] left-0  w-10  bottom-10 ml-7 md:ml-8 lg:ml-10 border-l-[1px] border-white">
        </motion.div>
      </div>
      <div className='hidden sm:block  absolute z-0 mx-auto p-0 font-timmons md:text-6xl'
        style={{
          fontSize: "calc(var(--vh, 1vh) * 97)",
          color: "#181818",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          transition: "0.5s opacity",
          willChange: "transform",
          userSelect: "none",
        }}
      >ABOUT&nbsp;ME</div>
      <div className='block absolute z-0 mx-auto p-0 font-timmons md:text-6xl sm:hidden'
        style={{
          fontSize: "calc(var(--vh, 1vh) * 85)",
          color: "#181818",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          transition: "0.5s opacity",
          willChange: "transform",
          userSelect: "none",
        }}
      >ME</div>
      <div className='flex justify-center items-center  flex-col md:flex-row w-full h-full md:w-[90vw] xl:w-[85vw] md:h-[90vh] mt-6 md:mt-0   lg:h-2/3  z-20'>
        {/* left container */}
        <div className='p-4 md:pr-8 flex  flex-col  w-full lg:w-2/3'>
          <div className="w-full h-full relative flex flex-col items-start justify-center ">
            <div className='font-cinetype text-3xl xl:text-4xl 2xl:text-5xl mb-1 md:mb-3' style={{ color: "transparent", WebkitTextStroke: "0.02em #fff" }}>HI THERE</div>
            <div className='font-cinetype text-left text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl  text-white leading-tight md:text-xl md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight tracking-wider mb-2 md:mb-6'>I'm a passionate Front-end web developer, I specialize in designing and developing clean, functional and interactive user experiences, I'm quietly confident, fast learner, and perpetually working on improving myself.</div>
            <div className='md:hidden w-full flex flex-row text-white font-reloadLight underline mb-4'>see my Main Stack</div>
            {/* main stack */}
            <div className='hidden md:flex md:w-full md:pr-8'>
              <div className='w-full flex justify-between px-4 xl:px-6 h-16 xl:px-8 xl:h-20  bg-gradient-to-b from-[#312E2E] to-[#403D3D] mb-7 rounded-md flex flex-row items-center shadow-md'>
                <div className='flex justify-center items-center   h-full'><span className='text-white font-reloadLight text-sm md:text-md xl:text-xl 2xl:text-2xl'>MAIN STACK</span></div>
                <div className='relative flex flex-row gap-3 xl:gap-6 overflow-visible '>
                  <div className='relative flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:react" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      ReactJs
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] text-white" icon="cib:next-js" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      NextJs
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:javascript" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Javascript
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:typescript-icon" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Typescript
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:redux" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Redux
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:tailwindcss-icon" />
                    <span className="inline-block absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      TailwindCss
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:figma" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Figma
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className='flex flex-row '>
              <button className={`${AboutStyles.btn} ${AboutStyles.btnCircle} h-10 w-28 sm:h-10 sm:w-32  xl:h-11 xl:w-40 2xl:h-12 2xl:w-44`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                <span className='cotet z-20 font-reloadLight mt-1 text-sm lg:text-[1em] xl:text-xl flex flex-row items-center'>RESUME<svg xmlns="http://www.w3.org/2000/svg" className={`${AboutStyles.arrow} w-4 h-4 xl:w-5 xl:h-5 mb-1  ml-3`} viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></span>
              </button>
              <a href="mailto:naourchadi@gmail.com" target="_blank" className={`${AboutStyles.btn2} ${AboutStyles.btnCircle2} h-10 w-36 sm:h-10 sm:w-44 ml-3 xl:h-11 xl:w-52 xl:ml-4 2xl:h-12 2xl:w-60 2xl:ml-6`}
              >
                <span className='cotet z-20 font-reloadLight mt-1 text-sm lg:text-[1em] xl:text-xl flex flex-row items-center'>Get in touch<svg xmlns="http://www.w3.org/2000/svg" className={`${AboutStyles.arrow2}  w-4 h-4 xl:w-5 xl:h-5 mb-1 ml-3`} viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></span>
              </a>
            </div>
          </div>
        </div>
        {/* right container */}
        <div className="md:flex md:flex-col lg:mt-0  md:justify-center md:items-center md:h-full md:w-full lg:w-1/3 ">
          <div className='flex flex-col justify-center items-center relative h-auto w-full '>
            {/* emoji div */}
            <div className="-mt-8 sm:-mt-16 2xl:-mt-24 relative w-72 h-72 md:w-[21rem] md:h-[21rem] xl:w-[430px] xl:h-[430px]  2xl:w-[490px] 2xl:h-[500px] ">
              <Image layout="fill" src={Memoji} className="hidden" />
            </div>
            {/* glass card */}
            <div className='-mt-7 2xl:-mt-10 px-10 xl:-mt-10 2xl:-mt-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-lg w-72 sm:w-80 2xl:w-96 h-28 xl:h-28 2xl:h-40 flex justify-center items-center'>
              <svg className="absolute top-2 left-2 opacity-20 w-6 xl:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.69094 6.292C5.09394 4.771 7.21694 4 9.99994 4H10.9999V6.819L10.1959 6.98C8.82594 7.254 7.87294 7.793 7.36294 8.584C7.09683 9.01013 6.94591 9.49804 6.92494 10H9.99994C10.2652 10 10.5195 10.1054 10.707 10.2929C10.8946 10.4804 10.9999 10.7348 10.9999 11V18C10.9999 19.103 10.1029 20 8.99994 20H2.99994C2.73472 20 2.48037 19.8946 2.29283 19.7071C2.1053 19.5196 1.99994 19.2652 1.99994 19V14L2.00294 11.081C1.99394 10.97 1.80394 8.34 3.69094 6.292ZM19.9999 20H13.9999C13.7347 20 13.4804 19.8946 13.2928 19.7071C13.1053 19.5196 12.9999 19.2652 12.9999 19V14L13.0029 11.081C12.9939 10.97 12.8039 8.34 14.6909 6.292C16.0939 4.771 18.2169 4 20.9999 4H21.9999V6.819L21.1959 6.98C19.8259 7.254 18.8729 7.793 18.3629 8.584C18.0968 9.01013 17.9459 9.49804 17.9249 10H20.9999C21.2652 10 21.5195 10.1054 21.707 10.2929C21.8946 10.4804 21.9999 10.7348 21.9999 11V18C21.9999 19.103 21.1029 20 19.9999 20Z" fill="#D9D9D9" />
              </svg>
              <div className="flex justify-center items-center relative transition ease-in-out mt-4">
                <span className='text-sm 2xl:text-xl text-white font-cinetype mb-5   transition ease-in-out duration-300'>{displayedQuote.text}</span>
                <span className="absolute text-xs xl:text-md text-white right-0 -bottom-2 uppercase  transition ease-in-out duration-300">— {displayedQuote.author}</span>
              </div>
              <svg className="absolute top-2 right-2 opacity-20 w-6 xl:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3091 6.292C18.9061 4.771 16.7831 4 14.0001 4H13.0001V6.819L13.8041 6.98C15.1741 7.254 16.1271 7.793 16.6371 8.584C16.9032 9.01013 17.0541 9.49804 17.0751 10H14.0001C13.7348 10 13.4805 10.1054 13.293 10.2929C13.1054 10.4804 13.0001 10.7348 13.0001 11V18C13.0001 19.103 13.8971 20 15.0001 20H21.0001C21.2653 20 21.5196 19.8946 21.7072 19.7071C21.8947 19.5196 22.0001 19.2652 22.0001 19V14L21.9971 11.081C22.0061 10.97 22.1961 8.34 20.3091 6.292ZM4.00006 20H10.0001C10.2653 20 10.5196 19.8946 10.7072 19.7071C10.8947 19.5196 11.0001 19.2652 11.0001 19V14L10.9971 11.081C11.0061 10.97 11.1961 8.34 9.30906 6.292C7.90606 4.771 5.78306 4 3.00006 4H2.00006V6.819L2.80406 6.98C4.17406 7.254 5.12706 7.793 5.63706 8.584C5.90317 9.01013 6.05409 9.49804 6.07506 10H3.00006C2.73484 10 2.48049 10.1054 2.29295 10.2929C2.10542 10.4804 2.00006 10.7348 2.00006 11V18C2.00006 19.103 2.89706 20 4.00006 20Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
)

export default AboutSection