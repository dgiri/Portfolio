interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
