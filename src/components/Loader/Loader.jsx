import classes from "./Loader.module.css";
import {motion} from 'framer-motion';
const Loader = () => {
    const h1variants = {
        initial:{
            opacity:0,
            scale:0,
            backgroundSize:"100%"
        },
        animate:{
            opacity: 1,
            scale: 1,
            backgroundSize:["100%","150%"],
            transition:{duration:2,type: "spring",
                stiffness: 80, // Higher = faster spring
                damping: 20,}
        }
    }

    const containerVariants ={
        initial:{
            translateY:0
        },
        animate:{
            translateY:"-100%",
            transition:{duration:1,ease:"easeOut",delay:2.2}
        }
    }
    return(
        <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={classes.loader}>
            <motion.h1
            variants={h1variants}
            initial="initial"
            animate="animate"
            >
                Fluid JavaScript Animations
            </motion.h1>
        </motion.div>
    )
}

export default Loader;