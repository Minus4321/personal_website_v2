import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import images from "../../constants/images";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className="xs:px-6 pt-12 xl:pt-32">
      <div className="footer flex flex-col items-center py-12">
        <div className="grid grid-cols-4 gap-12 max-w-7xl px-8 space-x-28 max-[1380px]:w-5/6 max-[1380px]:gap-x-4 max-[1380px]:space-x-16 max-[1170px]:space-x-8 max-[1170px]:gap-x-16 max-[1170px]:px-0 max-[870px]:space-x-0 max-[870px]:grid-cols-3 max-[870px]:gap-x-6 max-[640px]:grid-cols-1">
          <div>
            <a href="#" className="footer__logo-link">
              <img src={images.Logo4Cropped} alt="" className="footer__logo" />
            </a>
            <p className="footer__description max-[640px]:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              soluta earum maxime nostrum tenetur, deserunt.
            </p>
            <div className="icon__container">
              <a href="google.com" target="_blank" className="icon__link">
                <FontAwesomeIcon icon={faLinkedin} className="h-7 pr-4" />
              </a>
              <a href="google.com" target="_blank" className="icon__link">
                <FontAwesomeIcon icon={faGithub} className="h-7 pr-4" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h1 className="text-xl mb-2">
              <span className="decoration-[#ffa500] underline">Projects</span>
            </h1>
            <div className="flex flex-col">
              <a href="#" className="footer__subheading">
                Project 1
              </a>
              <a href="#" className="footer__subheading">
                Project 2
              </a>
              <a href="#" className="footer__subheading">
                Project 3
              </a>
              <a href="#" className="footer__subheading">
                Project 4
              </a>
            </div>
          </div>

          {/* Information */}
          <div className="items-start">
            <h1 className="text-xl mb-2">
              <span className="decoration-[#ffa500] underline">
                Information
              </span>
            </h1>
            <div>
              <div className="flex space-x-2 items-center information-details">
                <DevicePhoneMobileIcon className="text-[orange] h-4 w-4 animate-pulse" />
                <p>0404574025</p>
              </div>
              <div className="flex space-x-2 items-center information-details">
                <MapPinIcon className="text-[orange] h-4 w-4 animate-pulse" />
                <p>Sydney</p>
              </div>
              <div className="flex space-x-2 items-center information-details">
                <EnvelopeIcon className="text-[orange] h-4 w-4 animate-pulse" />
                <p className="w-1/12">surym0308@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl mb-2">
              <span className="decoration-[#ffa500] underline">
                Get In Touch
              </span>
            </h1>
            <div className="flex flex-col">
              <a href="#contact" className="footer__subheading">
                Contact
              </a>
              <a href="#" className="footer__subheading">
                Back To Top
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copyright max-w-7xl max-[1380px]:w-4/5 max-[768px]:w-10/12 flex items-center justify-center text-base col-span-4 mt-24 text">
          <small>2022 Manas.S &copy; All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
