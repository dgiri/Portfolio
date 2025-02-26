const AboutMe = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">About me</h2>

      {/* Intro paragraph */}
      <div className="prose dark:prose-invert max-w-2xl mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          I'm a full-stack developer with a passion for building beautiful,
          functional, and user-friendly applications. Currently working on
          exciting projects and always open to new opportunities.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connect Panel */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
          <div className="space-y-3">
            <a
              href="mailto:giri.debu@gmail.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>giri.debu@gmail.com</span>
            </a>
            <a
              href="https://github.com/dgiri"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>dgiri</span>
            </a>
            <a
              href="https://www.linkedin.com/in/debashis-giri"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Debashis Giri</span>
            </a>
          </div>
        </div>

        {/* Status Panel */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
            </span>
            <h3 className="text-lg font-semibold">Available for work!</h3>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Panel */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Vue.js",
              "Nest.js",
              "Node.js",
              "Next.js",
              "React",
              "React Native",
              "TypeScript",
              "Tailwind CSS",
              "Ruby on Rails",
              "AWS",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Git",
              "Docker",
              "Redis",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
