import React, { useRef, useEffect, forwardRef, useState } from 'react'
import Image from 'next/image'
import Memoji from "../../public/memoji.png"
import { motion, useAnimation } from "framer-motion"
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
  const { ref, inView } = useInView();
  const [open, setOpen] = useState(false);
  const [showTechTooltip, setShowTechTooltip] = useState(false);

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
    if (inView) {
      animation.start("visible");
      animation1.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
      animation1.start("hidden");
    }
  }, [inView, animation])

  return (
    <section ref={AboutRef} className="h-full relative flex z-10  w-full flex flex-col justify-center items-center overflow-hidden bg-dark">
      <Resume open={open} setOpen={setOpen} ></Resume>
      <div ref={ref}>
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
            <div className='font-cinetype text-3xl xl:text-4xl 2xl:text-5xl mb-3' style={{ color: "transparent", WebkitTextStroke: "0.02em #fff" }}>HI THERE</div>
            <div className='font-cinetype text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl  text-white leading-tight md:text-xl md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight tracking-wider mb-6'>I'm a passionate Front-end web developer, I specialize in designing and developing clean, functional and interactive user experiences, I'm quietly confident, fast learner, and perpetually working on improving myself.</div>
            {/* main stack */}
            <div className='hidden md:flex md:w-full md:pr-8'>
              <div className='w-full flex justify-between px-4 xl:px-6 h-16 xl:px-8 xl:h-20  bg-gradient-to-b from-[#312E2E] to-[#403D3D] mb-7 rounded-md flex flex-row items-center shadow-md'>
                <div className='flex justify-center items-center   h-full'><span className='text-white font-reloadLight text-sm md:text-md xl:text-xl 2xl:text-2xl'>MAIN STACK</span></div>
                {/* <div className='flex flex-row gap-6 bg-green-200'>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className='w-full'
                  >
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-end items-center h-20 w-20 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'><Icon className="w-12 h-12" icon="logos:react" /></div></SwiperSlide>
                  </Swiper>
                </div> */}
                <div className='relative flex flex-row gap-3 xl:gap-6 overflow-visible '>
                  <div className='relative flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:react" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      ReactJs
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] text-white" icon="cib:next-js" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      NextJs
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:javascript" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Javascript
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:typescript-icon" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Typescript
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%] rounded-sm" icon="logos:redux" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Redux
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='relative flex justify-end group items-center h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:tailwindcss-icon" />
                    <span className="inline-block absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      TailwindCss
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </span>
                  </div>
                  <div className='flex justify-end items-center group h-12 w-12 xl:h-16 xl:w-16 bg-green-200 rounded-md bg-[#403D3D] flex justify-center items-center  w-20'>
                    <Icon className=" w-[75%] h-[75%]" icon="logos:figma" />
                    <span className="inline-block font-cinetype absolute scale-0 group-hover:scale-100 -top-10 z-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 tooltip">
                      Figma
                      <div class="tooltip-arrow" data-popper-arrow></div>
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
              // onClick={(e) => {
              //   e.preventDefault();
              //   setOpen(!open);
              // }}
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
            <div className="-mt-8 sm:-mt-16 2xl:-mt-20 relative w-72 h-72 md:w-[21rem] md:h-[21rem] xl:w-[430px] xl:h-[430px]  2xl:w-[490px] 2xl:h-[500px] ">
              <Image layout="fill" src={Memoji} className="hidden" />
            </div>
            {/* glass card */}
            <div className='-mt-8 2xl:-mt-10 xl:-mt-10 2xl:-mt-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-lg w-72 sm:w-80 2xl:w-96 h-24 xl:h-28 2xl:h-36 flex justify-center items-center'>
              <svg className="absolute top-2 left-2 opacity-20 w-6 xl:w-8" viewBox="0 0 71 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9573 17.5855C15.1768 17.5855 14.4278 17.6809 13.6823 17.7679C13.9238 17.1168 14.1723 16.4544 14.5713 15.8594C14.9703 14.995 15.5933 14.2456 16.2128 13.4907C16.7308 12.6739 17.6443 12.121 18.3163 11.4222C19.0198 10.743 19.9788 10.2911 20.7383 9.72701C21.4838 9.13763 22.4603 8.84293 23.2373 8.42756C24.0493 8.05428 24.7563 7.64171 25.5123 7.44524L27.3988 6.82218L29.0578 6.26928L27.3603 0.830078L25.2708 1.23423C24.6023 1.36894 23.7868 1.52611 22.8593 1.71416C21.9108 1.85449 20.8993 2.23899 19.7723 2.58982C18.6593 2.98836 17.3713 3.25779 16.1743 3.8977C14.9703 4.50954 13.5808 5.02034 12.3558 5.83987C11.1693 6.68465 9.73779 7.41718 8.68079 8.49211C7.52579 9.49687 6.3848 10.5522 5.4993 11.7534C4.4738 12.8985 3.7773 14.1558 3.0423 15.3992C2.3773 16.6425 1.8418 17.9139 1.4043 19.1488C0.574796 21.6242 0.203795 23.9761 0.0602954 25.9885C-0.0587046 28.0036 0.0112954 29.6792 0.158295 30.8916C0.210795 31.4642 0.308796 32.0199 0.378796 32.4044L0.466295 32.8759L0.557295 32.859C1.17981 35.1909 2.61286 37.3337 4.69067 39.0397C6.76848 40.7457 9.40614 41.9451 12.2985 42.4992C15.1909 43.0534 18.2199 42.9395 21.0349 42.1709C23.85 41.4023 26.3362 40.0103 28.2059 38.1559C30.0756 36.3015 31.2525 34.0606 31.6003 31.6923C31.9481 29.324 31.4526 26.9252 30.1713 24.7733C28.8899 22.6214 26.875 20.8043 24.3596 19.5323C21.8442 18.2603 18.9311 17.5853 15.9573 17.5855ZM54.4573 17.5855C53.6768 17.5855 52.9278 17.6809 52.1823 17.7679C52.4238 17.1168 52.6723 16.4544 53.0713 15.8594C53.4703 14.995 54.0933 14.2456 54.7128 13.4907C55.2308 12.6739 56.1443 12.121 56.8163 11.4222C57.5198 10.743 58.4788 10.2911 59.2383 9.72701C59.9838 9.13763 60.9603 8.84293 61.7373 8.42756C62.5493 8.05428 63.2563 7.64171 64.0123 7.44524L65.8988 6.82218L67.5578 6.26928L65.8603 0.830078L63.7708 1.23423C63.1023 1.36894 62.2868 1.52611 61.3593 1.71416C60.4108 1.85449 59.3993 2.23899 58.2723 2.58982C57.1628 2.99116 55.8713 3.25779 54.6743 3.9005C53.4703 4.51234 52.0808 5.02314 50.8558 5.84267C49.6693 6.68746 48.2378 7.41998 47.1808 8.49211C46.0258 9.49687 44.8848 10.5522 43.9993 11.7534C42.9738 12.8985 42.2773 14.1558 41.5423 15.3992C40.8773 16.6425 40.3418 17.9139 39.9043 19.1488C39.0748 21.6242 38.7038 23.9761 38.5603 25.9885C38.4413 28.0036 38.5113 29.6792 38.6583 30.8916C38.7108 31.4642 38.8088 32.0199 38.8788 32.4044L38.9663 32.8759L39.0573 32.859C39.6798 35.1909 41.1129 37.3337 43.1907 39.0397C45.2685 40.7457 47.9061 41.9451 50.7985 42.4992C53.6909 43.0534 56.7198 42.9395 59.5349 42.1709C62.35 41.4023 64.8362 40.0103 66.7059 38.1559C68.5756 36.3015 69.7524 34.0606 70.1003 31.6923C70.4481 29.324 69.9526 26.9252 68.6713 24.7733C67.3899 22.6214 65.375 20.8043 62.8596 19.5323C60.3442 18.2603 57.4311 17.5853 54.4573 17.5855Z" fill="#CCCCCC" />
              </svg>
              <div className=" flex justify-center items-start   relative">
                <span className='text-md 2xl:text-xl text-white font-cinetype mb-5'>Do it or dont, there is no try</span>
                <span className="absolute text-xs xl:text-md text-white right-0 bottom-0">— YODA</span>
              </div>
              <svg className="absolute bottom-2 right-2 opacity-20 w-6 xl:w-8" viewBox="0 0 71 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9573 17.5855C15.1768 17.5855 14.4278 17.6809 13.6823 17.7679C13.9238 17.1168 14.1723 16.4544 14.5713 15.8594C14.9703 14.995 15.5933 14.2456 16.2128 13.4907C16.7308 12.6739 17.6443 12.121 18.3163 11.4222C19.0198 10.743 19.9788 10.2911 20.7383 9.72701C21.4838 9.13763 22.4603 8.84293 23.2373 8.42756C24.0493 8.05428 24.7563 7.64171 25.5123 7.44524L27.3988 6.82218L29.0578 6.26928L27.3603 0.830078L25.2708 1.23423C24.6023 1.36894 23.7868 1.52611 22.8593 1.71416C21.9108 1.85449 20.8993 2.23899 19.7723 2.58982C18.6593 2.98836 17.3713 3.25779 16.1743 3.8977C14.9703 4.50954 13.5808 5.02034 12.3558 5.83987C11.1693 6.68465 9.73779 7.41718 8.68079 8.49211C7.52579 9.49687 6.3848 10.5522 5.4993 11.7534C4.4738 12.8985 3.7773 14.1558 3.0423 15.3992C2.3773 16.6425 1.8418 17.9139 1.4043 19.1488C0.574796 21.6242 0.203795 23.9761 0.0602954 25.9885C-0.0587046 28.0036 0.0112954 29.6792 0.158295 30.8916C0.210795 31.4642 0.308796 32.0199 0.378796 32.4044L0.466295 32.8759L0.557295 32.859C1.17981 35.1909 2.61286 37.3337 4.69067 39.0397C6.76848 40.7457 9.40614 41.9451 12.2985 42.4992C15.1909 43.0534 18.2199 42.9395 21.0349 42.1709C23.85 41.4023 26.3362 40.0103 28.2059 38.1559C30.0756 36.3015 31.2525 34.0606 31.6003 31.6923C31.9481 29.324 31.4526 26.9252 30.1713 24.7733C28.8899 22.6214 26.875 20.8043 24.3596 19.5323C21.8442 18.2603 18.9311 17.5853 15.9573 17.5855ZM54.4573 17.5855C53.6768 17.5855 52.9278 17.6809 52.1823 17.7679C52.4238 17.1168 52.6723 16.4544 53.0713 15.8594C53.4703 14.995 54.0933 14.2456 54.7128 13.4907C55.2308 12.6739 56.1443 12.121 56.8163 11.4222C57.5198 10.743 58.4788 10.2911 59.2383 9.72701C59.9838 9.13763 60.9603 8.84293 61.7373 8.42756C62.5493 8.05428 63.2563 7.64171 64.0123 7.44524L65.8988 6.82218L67.5578 6.26928L65.8603 0.830078L63.7708 1.23423C63.1023 1.36894 62.2868 1.52611 61.3593 1.71416C60.4108 1.85449 59.3993 2.23899 58.2723 2.58982C57.1628 2.99116 55.8713 3.25779 54.6743 3.9005C53.4703 4.51234 52.0808 5.02314 50.8558 5.84267C49.6693 6.68746 48.2378 7.41998 47.1808 8.49211C46.0258 9.49687 44.8848 10.5522 43.9993 11.7534C42.9738 12.8985 42.2773 14.1558 41.5423 15.3992C40.8773 16.6425 40.3418 17.9139 39.9043 19.1488C39.0748 21.6242 38.7038 23.9761 38.5603 25.9885C38.4413 28.0036 38.5113 29.6792 38.6583 30.8916C38.7108 31.4642 38.8088 32.0199 38.8788 32.4044L38.9663 32.8759L39.0573 32.859C39.6798 35.1909 41.1129 37.3337 43.1907 39.0397C45.2685 40.7457 47.9061 41.9451 50.7985 42.4992C53.6909 43.0534 56.7198 42.9395 59.5349 42.1709C62.35 41.4023 64.8362 40.0103 66.7059 38.1559C68.5756 36.3015 69.7524 34.0606 70.1003 31.6923C70.4481 29.324 69.9526 26.9252 68.6713 24.7733C67.3899 22.6214 65.375 20.8043 62.8596 19.5323C60.3442 18.2603 57.4311 17.5853 54.4573 17.5855Z" fill="#CCCCCC" />
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