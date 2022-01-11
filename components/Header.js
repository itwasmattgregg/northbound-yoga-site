import { useViewportScroll } from "framer-motion";

// Sticky header where N turns into full logo on scroll
// Will also need a mobile burger

export default function Header() {
  const { scrollYProgress } = useViewportScroll();

  return <h1 className="text-3xl font-bold underline">Northbound Yoga</h1>;
}
