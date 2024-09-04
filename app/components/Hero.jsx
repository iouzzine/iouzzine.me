import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { DownloadIcon } from "./icons/DownloadIcon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col max-md:items-center max-md:justify-center items-start">
      <div className="flex-[2] px-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
        <h2 className="font-caption text-5xl max-md:text-4xl">
          Ismail Ouzzine
        </h2>
        <h3>Software developer</h3>
        <p className="mb-3">
          As a Full Stack Developer, I bring a versatile and agile approach to
          building applications, proficient in various programming languages and
          experienced with both relational and non-relational databases.
        </p>
        <Link
          href="/resume.pdf"
          target="_blank"
          className={cn(
            buttonVariants(
              { variant: "outline", size: "lg" },
              "flex items-center gap-2"
            )
          )}
        >
          <span className="uppercase">Download CV</span>
          <DownloadIcon size={24} className="ml-5" />
        </Link>
      </div>
      <div className="flex-1 max-md:py-5">
        <img
          src="https://avatars.githubusercontent.com/u/123068616"
          className="w-full h-auto max-w-xs rounded-full hover:scale-110 transition-all duration-400"
          alt="ismail's picture"
        />
      </div>
    </Section>
  );
};
