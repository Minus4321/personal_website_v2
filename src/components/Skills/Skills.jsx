import Skill from "./Skill";
import "./Skills.css";
import { motion } from "framer-motion";
import { skills } from "../../skillsData";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="xs:px-6 py-12 xl:py-32"
    >
      <h3 className="heading--1 mx-auto max-w-7xl flex items-center px-10 mb-2 text-2xl max-[480px]:text-xl max-[480px]:mt-6 max-[376px]:text-lg max-[376px]:mb-3">
        Here are my skills
      </h3>

      <h3 className="font-semibold text-5xl mx-auto max-w-7xl flex items-center px-10 mb-20 xl:mb-28 max-[480px]:mb-16 max-[768px]:mb-24 max-[480px]:text-5xl max-[376px]:text-4xl max-[376px]:mb-12">
        Skills
      </h3>

      <div className="flex flex-col relative text-center xl:flex-row xl:px-10 justify-center xl:space-y-0 items-center mb-28 max-[376px]:mb-8 max-[480px]:mb-20">
        <div className="grid grid-cols-4 gap-9 px-10 max-[768px]:gap-10 max-[640px]:gap-7 max-[525px]:gap-5 max-[450px]:grid-cols-3 max-[290px]:gap-5">
          {skills.map((skill, index) => (
            // rendering a Skill component for each item in the skills array
            <Skill
              key={index}
              image={skill.image}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
