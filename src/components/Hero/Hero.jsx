import { useEffect } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import AnimatedArrow from "../DownArrow/AnimatedArrow";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Bringing ideas to life with code",
      "Continuously Learning & Growing",
      "Team-driven and ambitious",
    ],
    loop: true,
    delaySpeed: 700,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero flex items-center">
      {/* should fix overlapping hero */}
      <div className="container mx-auto max-w-7xl flex items-center px-10">
        {/* Hero Headings */}
        <div className="flex flex-col z-10">
          <div
            className="hero__heading--1 text-3xl mb-3 max-sm:text-2xl max-[480px]:text-xl max-[480px]:mt-8 max-[376px]:text-lg max-[376px]:mb-1"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="900"
          >
            Hi, my name is
          </div>
          <div
            className="hero__heading--2 font-semibold text-8xl mb-3 max-sm:text-6xl max-[480px]:text-5xl max-[376px]:text-4xl max-[376px]:mb-1"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="900"
          >
            Manas,
          </div>
          {/* Hero Typewriter and description */}
          <div data-aos="fade-up" data-aos-delay="1100" data-aos-duration="900">
            <h1>
              <span className="hero__heading--3 l leading-tight font-semibold text-[22px] text-6xl mb-3 max-sm:text-3xl max-[480px]:text-3xl max-[376px]:text-2xl">
                {text}
              </span>
              <span className="leading-tight text-6xl max-sm:text-3xl max-[480px]:text-3xl">
                <Cursor cursorColor="orange" />
              </span>
            </h1>
          </div>
          <p
            className="sm:text-lg max-w-lg mb-8 mt-3 leading-loose max-[480px]:leading-relaxed max-[480px]:mb-4 max-[376px]:text-sm  max-[376px]:mt-1"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="900"
          >
            I'm passionate about building clean and functional web applications
            with modern frameworks such as React and Tailwind. Here's a bit more
            <span className="hero__span font-medium cursor-pointer">
              {" "}
              about me.
            </span>
          </p>
          {/* Links */}
          <div
            className="flex space-x-6 text-2xl max-[376px]:text-2xl"
            data-aos="fade-up"
            data-aos-delay="1300"
            data-aos-duration="900"
          >
            <a href="#" className="button group">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="button group">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="button group" target="_blank">
              <FontAwesomeIcon icon={faFile} />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll button */}
      <AnimatedArrow />
    </div>
  );
};

export default Hero;

{
  // <FontAwesomeIcon icon="fa-light fa-file" />;
  // <FontAwesomeIcon icon="fa-brands fa-github" />;
  // <FontAwesomeIcon icon="fa-brands fa-linkedin" />
  /*<header className="flex items-center" style="height: calc(100vh - 80px)">
  <div className="container mx-auto max-w-7xl flex items-center px-4 xs:px-6">
   
    <div className="flex flex-col z-10">
      <div className="mb-2 md:mb-4">Hi, my name is</div>
    </div>
  </div>
</header>; */
}

// md => 768px
// sm => 640 px
