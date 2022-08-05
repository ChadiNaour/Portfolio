import type { NextPage } from "next";
import React, { useState, useRef, useEffect } from "react";
import Card from '../Card';
import projects from '../../assets/data/projects'
import { motion } from "framer-motion";
import Drag from '../../components/drag';

const Projects: NextPage = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(true);

  useEffect(() => {
    const node = carouselRef?.current;
    if (node)
      setWidth(node.scrollWidth - node.offsetWidth);
  }, []);

  return (
    <motion.div ref={carouselRef} className="overflow-hidden relative h-screen">
      <motion.main
        drag={drag ? "x" : false}
        dragConstraints={{right: 0, left: -width - 100}}
        className="flex relative h-screen w-full px-10 py-20 sm:py-36 cursor-grab"
      >
        {projects.map((project, index) => (
          <Card key={index} data={project} setDrag={setDrag} /> 
        ))}
      </motion.main>
      <Drag />
    </motion.div>
  );
}; 

export default Projects;