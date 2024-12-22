"use client";

interface SkillProps {
  skill: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size: number; className: string }>;
    animate?: boolean;
    gradient: string;
  };
}

const Skill = ({ skill }: SkillProps) => {
  if (!skill) return null;

  return (
    <div
      className={`bg-gradient-to-tr ${skill.gradient} rounded-xl p-4 size-full flex flex-col items-center justify-between`}
    >
      <div className="flex justify-center mb-4">
        <skill.icon
          size={48}
          className={`text-primary ${
            skill.animate
              ? "animate-spin [animation-duration:20s]"
              : "transform transition-all duration-300 hover:scale-110"
          }`}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{skill.title}</h3>
      <p className="text-foreground/70 mb-4 text-center">{skill.description}</p>
    </div>
  );
};

export default Skill;
