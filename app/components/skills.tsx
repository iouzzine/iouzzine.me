"use client";

import { SKILLS } from "@/app/constants/data";
import { motion } from "framer-motion";
import Skill from "./skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="w-full select-none"
    >
      <div className="container mx-auto px-6 py-52">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-foreground/70 mt-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-4"
            >
              <Skill skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
