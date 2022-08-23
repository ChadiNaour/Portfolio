import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styles from '../styles/Home.module.css'
import { motion, useAnimation, useTransform } from "framer-motion"
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Head from 'next/head';

//sections
import AboutSection from '../components/About/About';
import HeaderSection from '../components/Header/Header';
import HomeSection from '../components/Home/HomeSection';
import ProjectsSection from '../components/Projects/Projects';
import { useInView } from 'react-intersection-observer';

const HeroPart = () => {
  const aboutRef = useRef();
  
  return (
    <>
      <Head>
        <title>Nchadi</title>
        <meta
          name="description"
          content="I am Naour Chadi, a front-end developer"
        />
        <link rel="icon" href="/Icon.png" />
      </Head>
      <Fullpage >
        <HeaderSection />
        <FullPageSections  >
          <FullpageSection className="h-screen" >
            <HomeSection resultRef={aboutRef} />
          </FullpageSection>
          <FullpageSection className="h-screen" >
            <AboutSection ref={aboutRef} />
          </FullpageSection>
          <FullpageSection className="h-screen" >
            <ProjectsSection />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default HeroPart;