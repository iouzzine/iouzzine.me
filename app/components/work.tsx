"use client";

import Image from "next/image";

interface JobProps {
  job: {
    company: string;
    role: string;
    period: string;
    description: string;
    image: string;
    darkBg?: boolean;
    technologies: string[];
  };
}

const Work = ({ job }: JobProps) => {
  if (!job) return null;

  return (
    <div className="bg-gradient-to-tr from-background via-background/80 to-background rounded-xl p-6 size-full">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`relative w-12 h-12 ${
            job.darkBg ? "dark:bg-white" : ""
          } rounded-lg p-2`}
        >
          <Image
            src={`/${job.image}`}
            alt={job.company}
            fill
            className="object-contain p-1"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{job.company}</h3>
          <p className="text-foreground/70">{job.role}</p>
        </div>
      </div>
      <p className="text-sm text-foreground/60 mb-2">{job.period}</p>
      <p className="text-foreground/70 mb-4">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Work;
