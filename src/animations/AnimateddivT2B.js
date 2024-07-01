import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const AnimateddivT2B = ({ children }) => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: [-20, 0] },
        hidden: { opacity: 0, y: 0 },
      }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }} // Add this line
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateddivT2B;
