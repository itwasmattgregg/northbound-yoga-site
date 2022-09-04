import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import { isActiveLink } from "../lib/utils";

import logoSvg from "../assets/NBY_horz.svg";

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

const Navigation = () => {
  return (
    <AnimateSharedLayout>
      <nav className="fixed flex">
        <Link href="/">
          <a>
            <Image
              src={logoSvg}
              alt="Northbound Yoga"
              width={250}
              height={50}
            />
          </a>
        </Link>
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="relative flex flex-col mr-6 sm:mr-8">
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
