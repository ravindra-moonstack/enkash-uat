"use client";

import { motion } from "framer-motion";

interface props {
  initial: any;
  whileInView: any;
  transition: any;
  innerHtml: any;
}

const WhileInViewAnimation = ({
  innerHtml,
  initial,
  whileInView,
  transition,
}: props) => {
  return (
    <>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={transition}
      >
        {innerHtml}
      </motion.div>
    </>
  );
};

export default WhileInViewAnimation;
