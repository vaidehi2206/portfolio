import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate reverse index for staggered delay
const staggerReverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs. */}
        {[...Array(6)].map((_, index)=>{
            return (
                <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: staggerReverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative" 
                />
            );
        })}   
    </>
  )
}

export default Stairs