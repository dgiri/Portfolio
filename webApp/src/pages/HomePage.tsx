import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col items-center text-center">
          <div className="mx-auto w-full max-w-screen-xl px-6 md:px-20 mb-16 mt-8 sm:mt-16 flex flex-col items-center justify-center text-center">
            <div
              className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-4"
              role="button"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              <span className="sm:hidden">Available for hire</span>
              <span className="hidden sm:inline font-mono">
                Available for work!
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Hi I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                Full Stack
              </span>{" "}
              developer creating modern web apps.
            </h1>

            <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
              A full stack developer based in India. I'm passionate about
              building modern web applications using Next.js, React, and
              Tailwind CSS.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="ZapScale"
              description="Zapscale is a customer success platform for B2B SaaS companies. Contributed to building scalable solutions for automating sales and marketing processes, with focus on performance and user experience."
              technologies={[
                "Vue.js",
                "Nest.js",
                "TypeScript",
                "Tailwind",
                "Quasar",
                "MongoDB",
              ]}
            />
            <ProjectCard
              title="Tiatros Healthcare Platform"
              description="Led the development of a HIPAA-Compliant Cloud-based healthcare platform that enables doctors and care teams to share medical records, coordinate treatment plans, and analyze real-time clinical information. Implemented Ellipsis Health API integration for patient profiling."
              technologies={[
                "Ruby on Rails",
                "AWS",
                "MySQL",
                "REST",
                "WebSockets",
                "Node.js",
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-block px-6 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
            >
              View all projects <span className="font-mono">→</span>
            </a>
          </div>
        </section>

        {/* About Section */}
        <AboutMe />

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-zinc-800 pt-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400">
              © 2025. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:your@email.com"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
