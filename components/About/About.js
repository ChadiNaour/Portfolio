import React, { useRef, Fragment, useEffect, forwardRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Memoji from "../../public/memoji.png"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import AboutStyles from "../../styles/About.module.css";
import Resume from './resume';
import StackModal from './stackModal';
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
  const [quoteId, setQuoteId] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("chosen", quotes[quoteId])
      setDisplayedQuote(quotes[quoteId]);
      console.log(quotes.length - 1)
      if (quoteId < quotes.length - 1)
        setQuoteId(quoteId + 1);
      else
        setQuoteId(0);
    }, 4000);
    return () => clearInterval(interval);
  })

  const quotes = [
    { text: "I'm being myself. I'm doing what I love. That's all that matters.", author: "James Charles" },
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

  const MainStack = [
    { Icon: "logos:react", name: "ReactJs" },
    { Icon: "cib:next-js", name: "NextJs" },
    { Icon: "logos:javascript", name: "Javascript" },
    { Icon: "logos:typescript-icon", name: "Typescript" },
    { Icon: "logos:redux", name: "Redux" },
    { Icon: "logos:tailwindcss-icon", name: "TailwindCss" },
    { Icon: "logos:figma", name: "Figma" },
    { Icon: "bi:git", name: "Git/Github" },
    // {Icon:"", name: "Fast Learning"},
    // {Icon:"", name: "Firefighting"},
  ];
  useEffect(() => {

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
    <section ref={AboutRef} className="h-full mt-3 lg:mt-0 relative flex z-10  w-full flex flex-col justify-center items-center overflow-hidden bg-dark">
      <Resume open={open} setOpen={setOpen} />
      <StackModal MainStack={MainStack} isOpen={modal} setIsOpen={setModal} />
      <div ref={ref} className="hidden lg:flex">
        <motion.div animate={animation} initial="hidden" variants={typeVariants}
          className="absolute  flex justify-center items-end   top-0 left-0 ml-6 md:ml-8 lg:ml-10 h-1/4 3xl:h-1/5">
          <div className='hidden  sm:block absolute font-reloadLight  text-white text-md pl-6 md:pl-6 z-10 pt-4 -rotate-90' style={{ userSelect: "none" }}>about</div>
        </motion.div>
        <motion.div animate={animation1} initial="hidden" variants={lineVariants}
          className="hidden sm:block  absolute z-10 top-1/4 3xl:top-[20%] left-0  w-10  bottom-10 ml-7 md:ml-8 lg:ml-10 border-l-[1px] border-white">
        </motion.div>
      </div>
      <div className='hidden lg:block  absolute z-0 mx-auto p-0 font-timmons lg:text-6xl'
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
      >ABOUT&nbsp;ME</div>
      <div className='hidden md:visible lg:hidden sm:block  absolute z-0 mx-auto p-0 font-timmons md:text-6xl'
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
      >ABOUT</div>
      <div className='block absolute z-0 mx-auto p-0 font-timmons md:text-6xl sm:hidden'
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
      >am</div>
      <div className='flex justify-center items-center  flex-col lg:flex-row w-full h-full md:w-[90vw] xl:w-[85vw] md:h-[90vh] mt-6 md:mt-0   lg:h-2/3  z-20'>
        {/* left container */}
        <div className='p-4 md:pr-8 flex  flex-col  w-full lg:w-2/3'>
          <div className="w-full h-full relative flex flex-col items-center lg:items-start justify-center ">
            <div className={`font-cinetype text-[1.6rem] md:text-3xl xl:text-4xl 2xl:text-[2.5rem] md:mb-2 xl:mb-2 ${AboutStyles.AboveText} select-none`} >HI THERE</div>
            <div className='font-cinetype text-center lg:text-left text-lg sm:text-2xl xl:text-3xl 2xl:text-[2.05rem]  text-white leading-normal md:text-[1.3rem] md:leading-wider lg:leading-tight xl:leading-tight 2xl:leading-normal tracking-tight md:tracking-normal lg:tracking-wide mb-3 xl:mb-6 select-none'>I'm a passionate Front-end web developer, I specialize in designing and developing clean, functional and interactive user experiences, I'm quietly confident, fast learner, and perpetually working on improving myself.</div>
            {/* main stack responsive */}
            <button onClick={(e) => {
              e.preventDefault();
              setModal(!modal);
            }} className='md:hidden hover:text-graye w-full text-center text-white font-reloadLight underline mb-3 cursor-pointer'>see my Main Stack</button>
            {/* main stack */}
            <div className='hidden md:flex md:w-full md:pr-8 mb-4 xl:mb-8'>
              <div className='w-full flex justify-between h-16 xl:px-8 xl:h-20 px-[5%]  bg-gradient-to-b from-[#312E2E] to-[#403D3D] rounded-md items-center shadow-md'>
                <div className='flex justify-center items-center   h-full'><span className='text-white font-cinetype text-sm md:text-md xl:text-xl 2xl:text-[1.4rem] select-none'>Main Stack</span></div>
                <div className='relative flex flex-row max-w-[80%] gap-3 2xl:gap-6 overflow-visible '>
                  {
                    MainStack.map((stack, index) => (
                      stack.name == "Javascript" || stack.name == "Typescript" ?
                        <div key={index} className='relative z-50 cursor-pointer flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                          <Icon className="w-[75%] h-[75%] rounded-md" icon={stack.Icon} />
                          <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-[#212121] border-[1px] border-white rounded-lg shadow-sm duration-300 ">
                            {stack.name}
                          </span>
                        </div> : stack.name == "NextJs" ? <div key={index} className='relative  z-50 cursor-pointer flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                          <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} color="white" />
                          <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-[#212121] border-[1px] border-white rounded-lg shadow-sm duration-300 ">
                            {stack.name}
                          </span>
                        </div> : stack.name == "Git/Github" ? <div key={index} className='relative cursor-pointer  z-50 flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                          <Icon className=" w-[75%] h-[75%]" color="white" icon={stack.Icon} />
                          <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-[#212121] border-[1px] border-white rounded-lg shadow-sm duration-300 ">
                            {stack.name}
                          </span>
                        </div> :  <div key={index} className='relative cursor-pointer  z-50 flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                          <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} />
                          <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-[#212121] border-[1px] border-white rounded-lg shadow-sm duration-300 ">
                            {stack.name}
                          </span>
                        </div>
                    ))
                  }
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
        <div className=" lg:flex lg:flex-col lg:mt-0 lg:justify-center lg:items-center lg:h-full md:w-full lg:w-1/3 ">
          <div className='flex flex-col justify-center items-center relative h-auto w-full '>
            {/* emoji div */}
            <div className="select-none -mt-8 lg:-mt-16 2xl:-mt-24 relative w-72 h-72 md:w-[21rem] md:h-[21.5rem] xl:w-[430px] xl:h-[440px]  2xl:w-[470px] 2xl:h-[480px] ">
              <Image layout="fill" src={Memoji} className="hidden" />
            </div>
            {/* glass card */}
            <div className='-mt-8 lg:-mt-9 xl:-mt-12 xl:-mt-10 2xl:-mt-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-lg w-72 sm:w-80 xl:w-96 h-28 xl:h-36 2xl:h-40'>
              <div className='h-full w-full flex justify-center items-center relative'>
                {/* quote svgs */}
                <svg className="absolute top-2 left-2 opacity-20 w-6 xl:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.69094 6.292C5.09394 4.771 7.21694 4 9.99994 4H10.9999V6.819L10.1959 6.98C8.82594 7.254 7.87294 7.793 7.36294 8.584C7.09683 9.01013 6.94591 9.49804 6.92494 10H9.99994C10.2652 10 10.5195 10.1054 10.707 10.2929C10.8946 10.4804 10.9999 10.7348 10.9999 11V18C10.9999 19.103 10.1029 20 8.99994 20H2.99994C2.73472 20 2.48037 19.8946 2.29283 19.7071C2.1053 19.5196 1.99994 19.2652 1.99994 19V14L2.00294 11.081C1.99394 10.97 1.80394 8.34 3.69094 6.292ZM19.9999 20H13.9999C13.7347 20 13.4804 19.8946 13.2928 19.7071C13.1053 19.5196 12.9999 19.2652 12.9999 19V14L13.0029 11.081C12.9939 10.97 12.8039 8.34 14.6909 6.292C16.0939 4.771 18.2169 4 20.9999 4H21.9999V6.819L21.1959 6.98C19.8259 7.254 18.8729 7.793 18.3629 8.584C18.0968 9.01013 17.9459 9.49804 17.9249 10H20.9999C21.2652 10 21.5195 10.1054 21.707 10.2929C21.8946 10.4804 21.9999 10.7348 21.9999 11V18C21.9999 19.103 21.1029 20 19.9999 20Z" fill="#D9D9D9" />
                </svg>
                <svg className="absolute top-2 right-2 opacity-20 w-6 xl:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3091 6.292C18.9061 4.771 16.7831 4 14.0001 4H13.0001V6.819L13.8041 6.98C15.1741 7.254 16.1271 7.793 16.6371 8.584C16.9032 9.01013 17.0541 9.49804 17.0751 10H14.0001C13.7348 10 13.4805 10.1054 13.293 10.2929C13.1054 10.4804 13.0001 10.7348 13.0001 11V18C13.0001 19.103 13.8971 20 15.0001 20H21.0001C21.2653 20 21.5196 19.8946 21.7072 19.7071C21.8947 19.5196 22.0001 19.2652 22.0001 19V14L21.9971 11.081C22.0061 10.97 22.1961 8.34 20.3091 6.292ZM4.00006 20H10.0001C10.2653 20 10.5196 19.8946 10.7072 19.7071C10.8947 19.5196 11.0001 19.2652 11.0001 19V14L10.9971 11.081C11.0061 10.97 11.1961 8.34 9.30906 6.292C7.90606 4.771 5.78306 4 3.00006 4H2.00006V6.819L2.80406 6.98C4.17406 7.254 5.12706 7.793 5.63706 8.584C5.90317 9.01013 6.05409 9.49804 6.07506 10H3.00006C2.73484 10 2.48049 10.1054 2.29295 10.2929C2.10542 10.4804 2.00006 10.7348 2.00006 11V18C2.00006 19.103 2.89706 20 4.00006 20Z" fill="#D9D9D9" />
                </svg>
                {/* quote data */}
                <div className="absolute flex justify-center items-center  mt-2 w-full px-8  transition ease-in-out">
                  <span className='text-sm xl:text-lg 2xl:text-xl text-white font-cinetype mb-5 transition ease-in-out duration-300 select-none'>{displayedQuote.text}</span>
                </div>
                <div className='absolute bottom-0 right-0 w-1/2 h-10 flex items-center justify-end pr-[5%] pb-[3%]'>
                  <span className="text-xs xl:text-md text-white uppercase  transition ease-in-out duration-300 select-none">— {displayedQuote.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
)

export default AboutSection