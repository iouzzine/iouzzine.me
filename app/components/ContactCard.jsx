"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const ContactCard = ({ image, name, url }) => {
  return (
    <Link href={url} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative p-4 rounded-lg border-2 border-accent/20 hover:border-primary/50 transition-all duration-300"
      >
        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="flex items-center gap-4 z-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full ring-2 ring-primary/20 overflow-hidden"
          >
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
          <span className="font-medium flex-1 text-foreground">{name}</span>
          <ArrowUpRight
            size={18}
            className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </motion.div>
    </Link>
  );
};
