const ProjectsPage = () => {
  const projects = [
    {
      title: "Zapscale",
      description:
        "Easiest to use and fastest to implement, ZapScale gives the deepest customer insights to growing CS teams.",
      image: "/src/assets/zapscale.png",
      technologies: [
        "Node.js",
        "Vue.js",
        "Nest.js",
        "Typescript",
        "MongoDB",
        "Git",
      ],
      link: "https://www.zapscale.com/",
    },
    {
      title: "TEP - Tiatros mobile app",
      description:
        "TEP is the revolutionary HIPAA-Compliant Cloud based healthcare solution for medical care. Doctors & extended care teams, share medical records, collect and analyze real-time clinical information, and coordinate treatment plans with patients, their families and health providers.",
      image: "/src/assets/tiatros-m.png",
      technologies: ["React Native", "React js", "Typescript", "JavaScript"],
      link: "https://www.tiatros.com/",
    },
    {
      title: "CBT by Tiatros",
      description:
        "CBT is a cloud-based telemedicine platform that provides secure and efficient communication between healthcare providers and patients. It offers a range of features to support telemedicine services, including video consultations, secure messaging, and patient management tools.",
      image: "/src/assets/tiatros-lts.png",
      technologies: [
        "Ruby",
        "Rails",
        "AWS",
        "Node.js",
        "MySQL",
        "Nessus",
        "Bootstrap",
      ],
      link: "https://www.tiatros.com/",
    },
    {
      title: "Tiatros",
      description:
        "Tiatros is the revolutionary HIPAA-Compliant Cloud based healthcare solution for medical care. Doctors & extended care teams, share medical records, collect and analyze real-time clinical information, and coordinate treatment plans with patients, their families and health providers.",
      image: "/src/assets/tiatros-1.png",
      technologies: [
        "Ruby",
        "Rails",
        "AWS",
        "Node.js",
        "MySQL",
        "Nessus",
        "Bootstrap",
      ],
      link: "https://tiatrosblog.wordpress.com/",
    },
    {
      title: "SOLARO",
      description:
        "SOLARO Helps You Study Better and Faster. Get online help in Math, Science, and English language arts; all aligned to the Alberta curriculum, with SOLARO.",
      image: "/src/assets/solaro.png",
      technologies: [
        "Ruby",
        "Rails",
        "PostgreSQL",
        "jQuery",
        "Bootstrap",
        "cucumber",
        "rspec",
      ],
      link: "https://www.solaro.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here are some of my projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <a
                    href={project.link}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
