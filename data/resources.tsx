import { ReactNode } from "react";

export interface Resource {
  name: string;
  description: string;
  type: "guide" | "event" | "tool" | "program" | "workshop";
  icon: ReactNode;
  link?: string;
}

export const resources: Resource[] = [
  {
    name: "Hackathons",
    description:
      "Participate in coding competitions and build amazing projects.",
    type: "event",
    link: "https://hackathons.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Athena Program"
        className="w-5 h-5 object-cover rounded-md"
      />
    ),
  },
  {
    name: "Hack Club Bank",
    description: "Get funding to support your club activities.",
    type: "tool",
    link: "https://hackclub.com/fiscal-sponsorship",
    icon: (
      <img
        src="https://assets.hackclub.com/hcb-light.svg"
        alt="Hack Club HCB logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Code.org",
    description: "Perfect for new members learning the basics of programming.",
    type: "program",
    link: "https://code.org/",
    icon: (
      <img
        src="https://images.seeklogo.com/logo-png/39/2/code-org-logo-png_seeklogo-396952.png"
        alt="Code.org Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Pizza Grants",
    description: "Get free pizza for your club activities.",
    type: "program",
    link: "https://hackclub.com/pizza",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Jams",
    description:
      "Take your coding skills to the next level with advanced topics.",
    type: "program",
    link: "https://jams.hackclub.com",
    icon: (
      <div className="w-5 h-5 object-cover rounded-md bg-pink-100 p-1 flex items-center justify-center">
        🍁
      </div>
    ),
  },
  {
    name: "Boba Drops",
    description: "Earn free boba for your club.",
    type: "event",
    link: "https://boba.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Grub",
    description: "Earn free junk food for your club.",
    type: "event",
    link: "https://grub.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Swirl",
    description: "Earn free ice cream for your club.",
    type: "event",
    link: "https://swirl.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Sprig",
    description: "Code easy online games with JavaScript.",
    type: "program",
    link: "https://sprig.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "FreeCodeCamp",
    description: "Learn to code for free.",
    type: "program",
    link: "https://freecodecamp.org/",
    icon: (
      <img
        src="https://avatars.githubusercontent.com/u/70107528?s=200&v=4"
        alt="FreeCodeCamp Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
  {
    name: "Cider",
    description: "Design an iOS App, Win $100.",
    type: "event",
    link: "https://cider.hackclub.com/",
    icon: (
      <img
        src="https://assets.hackclub.com/icon-rounded.svg"
        alt="Apple Logo"
        className="w-5 h-5 object-cover"
      />
    ),
  },
];

// Function to transform workshops into Resource format
export function transformWorkshopsToResources(workshops: any[]): Resource[] {
  return workshops.map((workshop) => ({
    name: workshop.title,
    description: workshop.description,
    type: "workshop" as const,
    link: workshop.link,
    icon: workshop.icon
  }));
}
