import { delay, motion, transform } from "motion/react";

const scroll_animation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const hover_animation = {
  whileHover: {
    scale: 1.03,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      duration: 1,
    },
  },
};

const gradient_text_animation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
  transition: { duration: 1, ease: "easeInOut" },
};

const socials_animation = {
  whileHover: {
    scale: 0.9,
    rotate: 5,
    color: "#7ffc03",
    borderColor: "#7ffc03",
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      duration: 1,
    },
  },

  whileTap: {
    scale: 0.8,
    rotate: 0,
    color: "#fc9803",
    borderColor: "#fc9803",
  },
};

export default motion;
export {
  hover_animation,
  scroll_animation,
  gradient_text_animation,
  socials_animation,
};
