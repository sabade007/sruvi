import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const AnimateddivR2L = ({ children }) => {
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
        visible: { opacity: 1, x: [20, -20, 0] },
        hidden: { opacity: 0, x: [20] },
      }}
      transition={{ duration: 2, delay: 0.5 }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateddivR2L;
