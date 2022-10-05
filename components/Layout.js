import Navigation from "@components/Navigation";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children, title, description }) => {
  const catTitle = title ? `Northbound Yoga | ${title}` : "Northbound Yoga";

  return (
    <div>
      <Head>
        <title>{catTitle}</title>
        <meta description={description} />
      </Head>
      <Navigation />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="container w-full pt-24"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
