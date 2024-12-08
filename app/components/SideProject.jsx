"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const SideProject = ({ Logo, title, description, url }) => {
  return (
    <Link href={url} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group p-4 rounded-lg overflow-hidden border-2 border-accent/20 hover:border-primary/50 transition-all duration-300"
      >
        <motion.div className="bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="flex items-start gap-4 z-10">
          <span className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
            <Logo className="w-5 h-5" />
          </span>
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
