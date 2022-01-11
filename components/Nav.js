import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
// import { isActiveLink } from "../lib/utils";

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
      <nav className="flex">
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
