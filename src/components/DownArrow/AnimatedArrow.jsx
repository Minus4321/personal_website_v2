import "./AnimatedArrow.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const AnimatedArrow = () => {
  const divOverlay = useRef(null);

  return (
    <a href="#skills" className="scroll max-[480px]:bottom-20">
      <motion.div
        initial={{
          y: "-69vh",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.1,
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            divOverlay.current.style.animation =
              "move 1.1s infinite ease-in-out";
          }, 250);
        }}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="fa-3x max-[480px]:text-4xl max-[376px]:text-3xl"
          // style={{ animation: "move 1.1s infinite ease-in-out" }}
          ref={divOverlay}
        />
      </motion.div>
    </a>
  );
};

export default AnimatedArrow;
