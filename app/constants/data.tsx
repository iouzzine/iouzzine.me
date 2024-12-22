import {
  BookA,
  Film,
  Images,
  Layout,
  MessageCircleHeart,
  UserSearch,
} from "lucide-react";
import { ReactLogo, ScalaLogo, NodeLogo } from "@/app/components/icons";

export const SIDE_PROJECTS = [
  {
    logo: Layout,
    title: "Portfolio",
    description: "My personal portfolio website",
    url: "https://github.com/iouzzine/iouzzine.me",
  },
  {
    logo: Film,
    title: "Hypertube",
    description:
      "Video streaming application downloaded via BitTorrent protocol.",
    url: "https://github.com/iouzzine/Hypertube",
  },
  {
    logo: MessageCircleHeart,
    title: "Matcha",
    description:
      "A dating platform dedicated to connecting potential soulmates.",
    url: "https://github.com/iouzzine/Matcha",
  },
  {
    logo: Images,
    title: "Camagru",
    description:
      "An Instagram-like site that allows users to create and share photo collages.",
    url: "https://github.com/iouzzine/Camagru",
  },
  {
    logo: UserSearch,
    title: "Github-Finder",
    description: "App to search Github users",
    url: "https://github.com/iouzzine/Github-Finder/",
  },
  {
    logo: BookA,
    title: "StoryBooks",
    description: "StoryBooks is an app to share story of your life",
    url: "https://github.com/iouzzine/StoryBooks.",
  },
];

export const WORKS = [
  {
    image: "atos.svg",
    company: "Atos",
    role: "Full Stack Developer",
    period: "September 2023 - Today",
    description: "Full-stack development using modern technologies.",
    technologies: ["React", "Node.js", "TypeScript", "Elecron", "PostgreSQL"],
  },
  {
    image: "tersea.svg",
    company: "Tersea",
    role: "Full Stack Developer",
    period: "March 2020 - September 2023",
    description: "Full-stack development using modern technologies.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
    ],
    darkBg: true,
  },
  {
    image: "webeuz.jpg",
    company: "Webeuz",
    role: "Full Stack Developer",
    period: "February 2020 - July 2020",
    description: "Full-stack development using modern technologies.",
    technologies: ["HTML", "CSS", "JS", "Firebase", "Firestore"],
  },
  {
    image: "koios.jpeg",
    company: "Koios",
    role: "Full Stack Developer",
    period: "November 2019 - January 2020",
    description: "Full-stack development using modern technologies.",
    technologies: ["React", "Node.js", "Angular", "MongoDB"],
  },
];

export const SKILLS = [
  {
    icon: ScalaLogo,
    title: "Scala",
    description:
      "Building robust and scalable backend systems with functional programming.",
    gradient: "from-red-500/20 via-red-500/10 to-transparent",
  },
  {
    icon: ReactLogo,
    title: "React",
    description:
      "Creating dynamic and responsive user interfaces with modern React.",
    animate: true,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    icon: NodeLogo,
    title: "Node.js",
    description: "Developing fast and efficient server-side applications.",
    gradient: "from-green-500/20 via-green-500/10 to-transparent",
  },
];
