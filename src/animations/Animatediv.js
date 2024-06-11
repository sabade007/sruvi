import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Animatediv({ children }) {
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }} // Add this line
    >
      {children}
    </motion.div>
  );
}

export default Animatediv;
