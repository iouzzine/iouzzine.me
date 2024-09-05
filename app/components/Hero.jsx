import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Section } from "./Section";
import { DownloadIcon } from "./icons/DownloadIcon";
import { EyeIcon } from "./icons/EyeIcon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-primary text-5xl max-md:text-4xl">
          Ismail Ouzzine
        </h2>
        <h3 className="font-caption text-3xl">Software developer</h3>
        <p className="pr-6 text-justify">
          As a Full Stack Developer, I bring a versatile and agile approach to
          building applications, proficient in various programming languages and
          experienced with both relational and non-relational databases.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <span className="uppercase">Generate CV</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="https://resume.iouzzine.me"
                target="_blank"
                className="flex items-center justify-between gap-2 w-full"
              >
                <span className="uppercase">Online</span>
                <EyeIcon size={24} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="https://resume.iouzzine.me/resume.pdf"
                target="_blank"
                className="flex items-center justify-between gap-2 w-full"
              >
                <span className="uppercase">PDF</span>
                <DownloadIcon size={24} />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/123068616"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="ismail's picture"
        />
      </div>
    </Section>
  );
};
