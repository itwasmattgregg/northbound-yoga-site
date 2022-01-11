import Navigation from "@components/Nav";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children, title, description }) => (
  <div>
    <Navigation />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="
        flex flex-col items-start w-full pt-10
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        pt-24 h-full
      "
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;