import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import { isActiveLink } from "../lib/utils";

import logoSvg from "../assets/NBY_horz 1.svg";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Test",
    href: "/test",
  },
];

const Navigation = () => {
  return (
    <AnimateSharedLayout>
      <nav className="flex fixed">
        <Image
          src={logoSvg}
          alt="Picture of the author"
          width={250}
          height={50}
        />
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {/* {isActiveLink(href, router.pathname) && ( */}
              <motion.div
                layoutId="navigation-underline"
                className="navigation-underline"
                animate
              />
              {/* )} */}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
