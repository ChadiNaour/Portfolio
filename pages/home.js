import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styles from '../styles/Home.module.css'
import { motion, useAnimation, useTransform } from "framer-motion"
import Fullpage, {
    FullPageSections,
    FullpageSection,
} from "@ap.cx/react-fullpage";

//sections
import AboutSection from '../components/About/About';
import HeaderSection from '../components/Header/Header';
import HomeSection from '../components/Home/HomeSection';
import ProjectsSection from '../components/Projects/Projects'; 
{/* <Fullpage>
        <FullPageSections>
          <FullpageSection className="h-screen" >
            <Hero /> 
          </FullpageSection>
          <FullpageSection className="h-screen">
            <Projects />
          </FullpageSection>
          <FullpageSection className="h-screen">
            <Infos />
          </FullpageSection>
        </FullPageSections>
      </Fullpage> */}

const HeroPart = () => {
    const aboutRef = useRef();

    return (
        // <motion.div initial={{ height: 0, backgroundColor: "red" }} animate={{ height: "100%", backgroundColor: "blue", delay: 10, duration: 4 }} className={styles.container}>
        <Fullpage >
            <HeaderSection />
            <FullPageSections  >
                <FullpageSection  className="h-screen" >
                    <HomeSection resultRef={aboutRef} />
                </FullpageSection>
                <FullpageSection  className="h-screen" >
                    <AboutSection ref={aboutRef} />
                </FullpageSection>
                <FullpageSection  className="h-screen bg-red-200" >
                    <ProjectsSection />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        // </motion.div>
    );
}

export default HeroPart;