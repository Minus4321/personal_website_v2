import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  // React Hooks Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  // Green 'success' Message
  const [message, setMessage] = useState("");

  // Form Reference
  const formRef = useRef();

  // For 'error' AND 'success' message rendering
  const [status, setStatus] = useState(null);

  // For 'loading' and 'checkmark' icon rendering
  const [isLoading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleClick = () => {
    setMessage("");
    setIsSuccessful(false);
  };

  // Emailjs
  const sendEmail = async () => {
    setLoading(true);
    let timer;
    try {
      await emailjs.sendForm(
        "service_70ehblg",
        "template_80j48dr",
        formRef.current,
        "y8MEV-9NBWiQF2z_R"
      );
      timer = setTimeout(() => {
        setLoading(false);
      }, 1650);
      timer = setTimeout(() => {
        setStatus("success");
        setIsSuccessful(true);
        setMessage(
          "Thanks for the message! Looking forward to speaking to you soon."
        );
      }, 1650);
    } catch (error) {
      alert(
        "The email service is temporarily unavailable. Please Contact me at 'surym0308@gmail.com'"
      );
      setLoading(false);
    } finally {
      timer = setTimeout(() => {
        reset();
      }, 1650);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mx auto py-12 xl:py-32"
    >
      <h3 className="heading--1 mx-auto max-w-7xl flex justify-center px-10 mb-3 text-2xl max-[480px]:text-xl max-[480px]:mt-6 max-[376px]:text-lg max-[376px]:mb-3">
        Let's get in&nbsp;
        <span className="decoration-[#ffa500] underline">touch</span>
      </h3>

      <h3 className="font-semibold text-5xl mx-auto max-w-7xl flex justify-center px-10 mb-6 max-[480px]:text-5xl max-[376px]:text-4xl max-[376px]:mb-3">
        Contact
      </h3>

      {/* Contact Details */}
      <div className="contact-info mb-6 max-[376px]:mb-3">
        <div className="flex items-center space-x-2 justify-center">
          <DevicePhoneMobileIcon className="text-[orange] h-7 w-7 animate-pulse max-[480px]:h-6 max-[480px]:w-6" />
          <p className="text-lg max-[480px]:text-base max-[360px]:text-sm font-medium">
            0404574025
          </p>
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <MapPinIcon className="text-[orange] h-7 w-7 animate-pulse max-[480px]:h-6 max-[480px]:w-6" />
          <p className="text-lg max-[480px]:text-base max-[360px]:text-sm font-medium">
            Sydney
          </p>
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <EnvelopeIcon className="text-[orange] h-7 w-7 animate-pulse max-[480px]:h-6 max-[480px]:w-6" />
          <p className="text-lg max-[480px]:text-base max-[360px]:text-sm font-medium">
            surym0308@gmail.com
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className="mb-28 max-[480px]:mb-8 max-[900px]:mb-14">
        <div className="flex items-center space-x-2 justify-center">
          <p className="text-2xl leading-relaxed font-normal w-2/3 max-w-7xl text-center max-[480px]:text-base">
            As a young frontend developer and computer science student based in
            Sydney, I love to design and build websites that are attractive,
            functional and responsive. I am currently seeking new opportunities
            to utilise my skills and experience in this field.
          </p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
        onClick={handleClick}
        className="flex flex-col space-y-7 w-fit mx-auto max-[900px]:space-y-4 max-[480px]:space-y-3"
      >
        <div className="flex space-x-2 form">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
            name="name"
          />

          <input
            {...register("email", { required: "Email is required!" })}
            // {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="contactInput"
            type="email"
            name="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
          name="subject"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
          name="message"
        />
        <button
          type="submit"
          className={
            errors.email
              ? "submit__button-disabled font-medium bg-[orange] rounded-md text-black text-lg h-28 py-7 px-7 max-[480px]:h-12 max-[480px]:text-sm"
              : "submit__button font-medium bg-[orange] rounded-md text-black text-lg h-28 py-7 px-7 max-[480px]:h-12 max-[480px]:text-sm"
          }
        >
          {isSuccessful ? (
            <FontAwesomeIcon
              icon={faCheck}
              className="fa-check max-[480px]:text-4xl max-[376px]:text-3xl"
            />
          ) : isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="max-[480px]:text-4xl max-[376px]:text-3xl"
              style={{
                animation:
                  "spinner 1000ms infinite linear, fade 500ms ease-in-out",
              }}
            />
          ) : (
            "Submit"
          )}
        </button>
        <div className="message-container pb-12">
          {status === "success" && (
            <p className="text-lg max-[700px]:text-base max-[376px]:text-sm px-10 text-center text-green-500">
              {message}
            </p>
          )}
          {errors.email && (
            <p className="text-lg max-[700px]:text-base max-[376px]:text-sm px-10 text-center text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
