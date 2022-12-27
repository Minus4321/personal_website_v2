import { useRef } from "react";
import { motion } from "framer-motion";
import "./Skill.css";

function Skill({ directionLeft = true, image, proficiency }) {
  const divOverlay = useRef(null);

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          // transition from outside to inside
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        onAnimationComplete={() => {
          setTimeout(() => {
            divOverlay.current.classList.add("group-hover:bg-[orange]");
          }, 50);
        }}
        src={image}
        className="rounded-full border-4 border-[#ffa500] object-cover w-16 h-16 sm:w-24 max-[640px]:h-20 max-[640px]:w-20 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 transition duration-300 ease-in-out max-[355px]:h-14 max-[355px]:w-14"
        ref={divOverlay}
      />
      <div
        className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out w-16 h-16 max-[640px]:h-20 max-[640px]:w-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 max-[355px]:h-14 max-[355px]:w-14"
        ref={divOverlay}
      >
        {/* Skill Container */}
        <div className="relative flex items-center justify-center h-full">
          <p className="xl:text-base font-medium text-white opacity-100 max-[768px]:text-[14px] max-[640px]:text-[11px] text max-[480px]:text-[10.5px]">
            {proficiency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

//
// we want oon our device the things to be centered so give

// Other way to add hover effect only after animation completes

// const [hasAnimated, setHasAnimated] = useState(false);

// useEffect(() => {
//   const element = document.getElementById("animated-element");

//   element.addEventListener("animationend", () => {
//     setHasAnimated(true);
//   });
// }, []);

// div needs this too --> id="animated-element"
// className={
//   hasAnimated
//     ? "animated"
//     : "absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-[orange] h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
// }
