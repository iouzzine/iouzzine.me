"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Work = ({ image, title, role, date, darkBg }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group p-4 rounded-lg border-2 border-accent/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-5">
        <Image
          src={`/${image}`}
          alt={title}
          width={48}
          height={48}
          className={`object-contain rounded-lg ring-2 ring-background ${
            darkBg ? "dark:bg-white" : ""
          }`}
        />
        <div>
          <h3 className="font-medium tracking-tight flex items-center gap-2 text-foreground">
            {title}
            <span className="text-sm text-primary/80 font-normal">{role}</span>
          </h3>
          <p className="text-xs text-muted-foreground/70 mt-1">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};
