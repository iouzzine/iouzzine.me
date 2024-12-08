"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SIDE_PROJECTS, WORKS } from "../constants/data";
import { Section } from "./Section";
import { Work } from "./Work";
import { SideProject } from "./SideProject";

export const Status = () => {
  return (
    <Section className="grid lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="p-6 bg-background/50 backdrop-blur-sm border-2 h-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-primary mb-6"
          >
            Side Projects
          </motion.h2>
          <div className="space-y-4">
            {SIDE_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SideProject
                  key={index}
                  Logo={project.logo}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6 flex flex-col"
      >
        <Card className="p-6 bg-background/50 backdrop-blur-sm border-2">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-primary mb-6"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-4">
            {WORKS.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Work {...work} />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
