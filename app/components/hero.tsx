"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Web Developer",
  "Backend Developer",
  "Frontend Developer",
];

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const role = roles[currentRole];

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full select-none"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6 py-48">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Ismail Ouzzine
            </h2>

            <motion.h3
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl lg:text-4xl font-medium text-foreground/80 h-[48px]"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block ml-1 text-primary"
              >
                |
              </motion.span>
            </motion.h3>

            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              As a Full Stack Developer, I bring a versatile and agile approach
              to building applications, proficient in various programming
              languages and experienced with both relational and non-relational
              databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://resume.iouzzine.me"
              target="_blank"
              className="group"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2"
              >
                View CV
                <ExternalLink
                  size={18}
                  className="group-hover:scale-125 duration-300"
                />
              </motion.button>
            </Link>
            <Link
              href="https://resume.iouzzine.me/resume.pdf"
              target="_blank"
              className="group"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-primary/20 rounded-xl font-medium flex items-center gap-2"
              >
                Download
                <Download
                  size={18}
                  className="group-hover:scale-125 duration-300"
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md">
            <div className="grid gap-4">
              <div className="p-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-[2rem]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-tr from-background via-background/80 to-background rounded-[1.8rem]"
                >
                  <Image
                    src="/avatar.jpg"
                    alt="ismail's picture"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-auto rounded-[1.5rem] object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex justify-center"
              >
                <Link href="#contact" scroll={true}>
                  <div className="bg-gradient-to-r from-primary/80 to-primary/50 px-8 py-3 rounded-2xl text-white font-medium shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    Available for hire
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
