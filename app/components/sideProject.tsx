import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

interface Project {
  logo?: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  url: string;
}

const SideProject = ({ project }: { project: Project }) => {
  if (!project) return null;

  return (
    <div className="bg-gradient-to-tr from-background via-background/80 to-background rounded-xl p-4 w-full h-full flex flex-col items-center justify-between">
      <div className="flex justify-center mb-4">
        {project.logo && <project.logo size={48} className="text-primary" />}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-center">
        {project.title}
      </h3>
      <p className="text-foreground/70 mb-4 text-center">
        {project.description}
      </p>

      <div className="flex justify-center">
        <Link href={project.url} target="_blank" className="group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2"
          >
            Code
            <Github
              size={18}
              className="group-hover:scale-125 transition-transform duration-300"
            />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SideProject;
