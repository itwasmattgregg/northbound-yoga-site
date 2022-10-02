import { AnimateSharedLayout, motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { nLogo, logo } from "assets";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Yoga",
    href: "/yoga",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const variants = {
  scrolled: {
    x: "-100%",
  },
  top: {
    x: 1,
  },
};

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 0) setIsScrolled(true);
      else setIsScrolled(false);
    });
  }, []);

  return (
    <AnimateSharedLayout>
      <nav className="fixed z-10 flex w-full shadow-sm bg-gray">
        <div className="container flex items-center justify-between gap-10 py-2">
          <Link href="/">
            <a className="grid h-8 overflow-hidden">
              <div className="z-10 col-start-1 row-start-1">
                <Image
                  src={nLogo}
                  alt="Northbound Yoga"
                  width={26}
                  height={32}
                />
              </div>
              <motion.div
                transition={{ ease: "easeOut" }}
                animate={isScrolled ? "scrolled" : "top"}
                variants={variants}
                className="col-start-1 col-end-3 row-start-1"
              >
                <Image
                  src={logo}
                  alt="Northbound Yoga"
                  width={248}
                  height={32}
                />
              </motion.div>
            </a>
          </Link>
          <div className="flex gap-10">
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a className="relative flex flex-col">
                  {name}
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
