import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.css";
import { Pagination, Navigation } from "swiper";
import images from "../../constants/images";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="xs:px-6 py-12 xl:py-32"
    >
      <h3 className="heading--1 mx-auto max-w-7xl flex items-center px-10 mb-2 text-2xl max-[480px]:text-xl max-[480px]:mt-6 max-[376px]:text-lg max-[376px]:mb-3">
        Here are my projects
      </h3>

      <h3 className="font-semibold text-5xl mx-auto max-w-7xl flex items-center px-10 mb-12 max-[480px]:text-5xl max-[376px]:text-4xl max-[376px]:mb-6">
        Projects
      </h3>

      <div className="flex flex-col relative text-center xl:flex-row xl:px-10 justify-center xl:space-y-0 items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-[480px]:gap-y-12 z-10 px-10 container max-w-7xl">
          {/* Ecom Project */}
          <div className="portfolio__item rounded-md overflow-hidden shadow-xl">
            <div className="portfolio__item-image">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    // "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
                    alt=""
                    className="object-fill h-38 w-96"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Ecom Project Details */}
            <div className="flex flex-col p-6 min-[480px]:p-8">
              <h3 className="project__title">Library</h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 max-[480px]:mb-4">
                <div className="tag">React</div>
                <div className="tag">Tailwind</div>
                <div className="tag">Firebase</div>
              </div>
              {/* Description */}
              <p className="project__para text-start max-[480px]:text-base max-[280px]:text-sm max-[480px]:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                eligendi? Optio rerum nesciunt expedita eos nisi, sit quo, dicta
                laborum in molestiae quia vero ipsam delectus reiciendis,
                officiis tempora mollitia.
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 225);
                  }}
                  target="_blank"
                  className="project__link"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Github</span>
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 225);
                  }}
                  target="_blank"
                  className="project__link--2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Youtube Project Details */}
          <div className="portfolio__item rounded-md overflow-hidden shadow-xl">
            <div className="portfolio__item-image">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    // "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
                    alt=""
                    className="object-fill h-38 w-96"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Youtube Project Details */}
            <div className="flex flex-col p-6 min-[480px]:p-8">
              <h3 className="project__title">Library</h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="tag">React</div>
                <div className="tag">Tailwind</div>
                <div className="tag">Firebase</div>
              </div>
              {/* Description */}
              <p className="project__para text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                eligendi? Optio rerum nesciunt expedita eos nisi, sit quo, dicta
                laborum in molestiae quia vero ipsam delectus reiciendis,
                officiis tempora mollitia.
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Github</span>
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link--2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Recipe Project */}
          <div className="portfolio__item rounded-md overflow-hidden shadow-xl">
            <div className="portfolio__item-image">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    // "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
                    alt=""
                    className="object-fill h-38 w-96"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Recipe Project Details */}
            <div className="flex flex-col p-6 min-[480px]:p-8">
              <h3 className="project__title">Library</h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="tag">React</div>
                <div className="tag">Tailwind</div>
                <div className="tag">Firebase</div>
              </div>
              {/* Description */}
              <p className="project__para text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                eligendi? Optio rerum nesciunt expedita eos nisi, sit quo, dicta
                laborum in molestiae quia vero ipsam delectus reiciendis,
                officiis tempora mollitia.
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Github</span>
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link--2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Restaurant Project */}
          <div className="portfolio__item rounded-md overflow-hidden shadow-xl">
            <div className="portfolio__item-image">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    // "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
                    alt=""
                    className="object-fill h-38 w-96"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.portfolio6}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Restaurant Project Details */}
            <div className="flex flex-col p-6 min-[480px]:p-8">
              <h3 className="project__title">Library</h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="tag">React</div>
                <div className="tag">Tailwind</div>
                <div className="tag">Firebase</div>
              </div>
              {/* Description */}
              <p className="project__para text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                eligendi? Optio rerum nesciunt expedita eos nisi, sit quo, dicta
                laborum in molestiae quia vero ipsam delectus reiciendis,
                officiis tempora mollitia.
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Github</span>
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.open("https://google.com", "_blank");
                    }, 3000);
                  }}
                  target="_blank"
                  className="project__link--2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 19 }}
                >
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
