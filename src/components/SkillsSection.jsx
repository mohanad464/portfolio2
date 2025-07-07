import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
    logo: "/logos/htmlcss.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    logo: "/logos/javascript.svg",
  },
  { name: "React", level: 90, category: "frontend", logo: "/logos/react.svg" },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
    logo: "/logos/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    level: 75,
    category: "frontend",
    logo: "/logos/tailwind.svg",
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    logo: "/logos/nextjs.svg",
  },

  {
    name: "Node.js",
    level: 90,
    category: "backend",
    logo: "/logos/nodejs.svg",
  },
  {
    name: "Express",
    level: 90,
    category: "backend",
    logo: "/logos/express.svg",
  },
  {
    name: "MongoDB",
    level: 90,
    category: "backend",
    logo: "/logos/mongodb.svg",
  },
  {
    name: "GraphQL",
    level: 50,
    category: "backend",
    logo: "/logos/graphql.svg",
  },

  {
    name: "Git/GitHub",
    level: 85,
    category: "tools",
    logo: "/logos/github.svg",
  },
  { name: "VS Code", level: 95, category: "tools", logo: "/logos/vscode.svg" },
];

const Categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 animate-float transition-transform hover:scale-110">
<img
  src={skill.logo}
  alt={skill.name}
  className={cn(
    "w-full h-full object-contain hover:scale-110 transition-transform hover:drop-shadow-md",
    ["Next.js", "Express", "GraphQL", "Git/GitHub"].includes(skill.name) &&
      "invert brightness-[2.5]"
  )}
/>


                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
