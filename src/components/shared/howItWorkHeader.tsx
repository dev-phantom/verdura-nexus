import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HowItWorksProps {
  title: string;
  description: string;
}

const HowItWorksHeader: React.FC<HowItWorksProps> = ({
  title,
  description,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-left mb-12 md:pl-3"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="text-3xl text-center md:text-left md:text-5xl font-lora font-medium mb-4"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="text-lg md:w-[40%] w-full text-center md:text-left"
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default HowItWorksHeader;
