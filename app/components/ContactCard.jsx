import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = ({ image, name, url }) => {
  return (
    <Link href={url} target="_blank" className="w-full flex-1">
      <Card className="flex items-center gap-4 p-3 bg-accent/10 hover:bg-accent/30 transition-colors group">
        <div className="relative w-10 h-10">
          <img
            src="https://avatars.githubusercontent.com/u/123068616"
            alt={name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={image}
            alt={name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg font-semibold">{name}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        />
      </Card>
    </Link>
  );
};
