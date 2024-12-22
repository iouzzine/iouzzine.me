"use client";

import { SIDE_PROJECTS } from "@/app/constants/data";
import { motion } from "framer-motion";
import Project from "./sideProject";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.3 }}
      className="w-full select-none"
    >
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-foreground/70 mt-4">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIDE_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-4"
            >
              <Project project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
