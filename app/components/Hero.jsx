"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { DownloadIcon, EyeIcon } from "./icons";

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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

export const Hero = () => {
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
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className=" z-10 flex max-md:flex-col items-center justify-between gap-8 h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="font-caption text-primary text-6xl max-md:text-5xl font-bold tracking-tight">
              Ismail Ouzzine
            </h2>
            <motion.h3
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="font-caption text-4xl text-foreground/80 h-[48px]"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-foreground/70 max-w-xl"
          >
            As a Full Stack Developer, I bring a versatile and agile approach to
            building applications, proficient in various programming languages
            and experienced with both relational and non-relational databases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-start gap-4"
          >
            <Link href="https://resume.iouzzine.me" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="group overflow-hidden border-2 border-blue-500 dark:border-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span className="uppercase font-semibold tracking-wider text-blue-700 dark:text-blue-300">
                    View CV
                  </span>
                  <EyeIcon
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300 text-blue-600 dark:text-blue-300"
                  />
                </span>
              </Button>
            </Link>

            <Link href="https://resume.iouzzine.me/resume.pdf" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="group overflow-hidden border-2 border-emerald-500 dark:border-emerald-400 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 hover:border-emerald-600 dark:hover:border-emerald-300 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span className="uppercase font-semibold tracking-wider text-emerald-700 dark:text-emerald-300">
                    Download
                  </span>
                  <DownloadIcon
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300 text-emerald-600 dark:text-emerald-300"
                  />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <motion.div
            animate={float.animate}
            className="flex items-center justify-center"
          >
            <div className="group">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="fixed pointer-events-none w-96 h-96 bg-gradient-to-tr from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl -z-10"
              />

              <div className="flex items-center justify-center">
                <div className="p-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary/30">
                  <Image
                    src="/avatar.jpg"
                    alt="ismail's picture"
                    width={320}
                    height={320}
                    priority
                    className="w-80 h-80 max-md:w-64 max-md:h-64 rounded-full object-cover border-2 border-background shadow-2xl transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
