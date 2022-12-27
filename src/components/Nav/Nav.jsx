import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import images from "../../constants/images";
import Wave from "../Wave/Wave";
import Burger from "../Hamburger/Burger";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <>
      {/* Wave */}
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.9,
        }}
      >
        <Wave />
      </motion.div>

      <nav className="top-0 px-5 flex justify-between max-w-7xl z-20 items-center absolute">
        {/* Logo */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.9,
          }}
        >
          <img id="personal-logo" src={images.Logo4} alt="#" />
        </motion.div>

        {/* Links */}
        <div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.9,
            }}
          >
            <ul className="hidden md:inline-flex">
              <li className="nav__link flex flex-row items-center">
                <a
                  href="#skills"
                  className="nav__link--anchor link__hover-effect link__hover-effect--black"
                >
                  Skills
                </a>
              </li>
              <li className="nav__link flex flex-row items-center">
                <a
                  href="#projects"
                  className="nav__link--anchor link__hover-effect link__hover-effect--black"
                >
                  Projects
                </a>
              </li>
              <li className="nav__link flex flex-row items-center">
                <a
                  href="#contact"
                  className="nav__link--anchor link__hover-effect link__hover-effect--black"
                >
                  Contact
                </a>
              </li>
              <li className="nav__link flex flex-row items-center">
                <a
                  href="#"
                  className="nav__link--anchor link__hover-effect link__hover-effect--black"
                >
                  <FontAwesomeIcon icon={faCircleHalfStroke} />
                </a>
              </li>
            </ul>
            {/* Hamburger Menu */}
          </motion.div>
          <Burger />
        </div>
      </nav>
    </>
  );
};

export default Nav;

// Dark/Light Mode Function
// let contrastToggle = false;
// function toggleContrast() {
//   contrastToggle = !contrastToggle;
//   if (contrastToggle) {
//     document.body.classList += " dark-theme";
//   } else {
//     document.body.classList.remove("dark-theme");
//   }
// }
