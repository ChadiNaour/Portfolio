import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="flex justify-center items-center text-center">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = (props) => {
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

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  !props.icon ? words.map((word) => {
    return word.push("\u00A0");
  }) : "";

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag className="flex p-0 justify-center text-center items-center m-0 sm:my-0 md:my-2 lg:my-3 xl:my-4">
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index} className="flex justify-center items-center text-center">
            {word.flat().map((element, index) => {
              return (
                <span
                  className="overflow-hidden inline-block flex justify-center items-center"
                  key={index}
                >
                  {!props.icon ?
                    <motion.span
                      style={{ display: "inline-block", userSelect: "none" }}
                      variants={item}
                      className='font-cinetype py-1 text-center text-2xl xs:text-3xl   md:text-[2.5em] lg:text-[2.6rem] xl:text-6xl 3xl:text-7xl z-10'
                    >
                      {element}
                    </motion.span> :
                    <motion.span
                      style={{ display: "inline-block", userSelect: "none" }}
                      variants={item}
                      className='m-0 flex justify-center items-center  p-0 font-cinetype py-1 text-4xl  xs:text-5xl  md:text-6xl lg:text-[3.5rem] mt-2 xl:text-7xl z-10'
                    >
                      {element}
                    </motion.span>
                  }
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedText;
