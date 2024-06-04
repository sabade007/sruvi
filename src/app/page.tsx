import { motion } from "framer-motion";
import bg1 from "../../public/bg.png";
import Header from "../components/Header";
export default function Home() {
  return (
    <div
      className="relative h-screen dark:bg-white overflow-y-auto"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="text-4xl text-black font-900 font-fira text-center"
        >
          Hello
        </motion.h1>
      </motion.div>
    </div>
  );
}
