import classes from "./MainSection.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSection = () => {
  const [delimeter,setDelimiter] = useState(""); // switch between word and character delimeter
  const text = "Animated Header";

  const changeDelimeter = () => {
    if(delimeter === ""){
        setDelimiter(" ");
    }else{
        setDelimiter("");
    }
  }

  // Variants for the animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delimeter === "" ? 0.03 : 0.5, // Controls stagger delay
      },
    },
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={classes.mainHeader}>
      <div className={classes.container}
      // setting the key to force re render on delimeter change
      key={delimeter}> 
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ display: "flex", gap: delimeter === "" ? "0.1rem":"0.6rem", 
          overflow: "hidden" }}
        >
          {text.split(delimeter).map((word, index) => {
            let letterStyle= {}
            if(text[index-1] == " ")
                {
                    console.log(word)
                    letterStyle={marginLeft:"0.6rem"}
                }
           return (
            <motion.span 
            style={letterStyle} 
            key={index} variants={wordVariants}
            >
              {word}
            </motion.span>
          )
        }
          )}
        </motion.h1>
      </div>
      <motion.button
        style={{backgroundColor:delimeter === "" ? "darkviolet":"rosybrown"}}
        initial={{y:40,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:1.3,type:"spring"}}
        onClick={changeDelimeter}
      >
        Switch Delimeter
      </motion.button>
    </div>
  );
};

export default MainSection;
