"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ReactLogo, ScalaLogo, NodeLogo } from "./icons";

export const Skills = () => {
  const skills = [
    {
      Icon: ScalaLogo,
      title: "Scala",
      description:
        "Building robust and scalable backend systems with functional programming.",
      gradient: "from-red-500/20 via-red-500/10 to-transparent",
    },
    {
      Icon: ReactLogo,
      title: "React",
      description:
        "Creating dynamic and responsive user interfaces with modern React.",
      animate: true,
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    },
    {
      Icon: NodeLogo,
      title: "Node.js",
      description: "Developing fast and efficient server-side applications.",
      gradient: "from-green-500/20 via-green-500/10 to-transparent",
    },
  ];

  return (
    <Section className="flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold">Technical Stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map(
          ({ Icon, title, description, animate, gradient }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <div className="relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="h-16 flex items-center justify-center">
                        <Icon
                          size={48}
                          className={`${
                            animate
                              ? "animate-spin group-hover:animate-spin"
                              : "transform transition-all duration-300 group-hover:scale-110"
                          }`}
                          style={animate ? { animationDuration: "20s" } : {}}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </Section>
  );
};
