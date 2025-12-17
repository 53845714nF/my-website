import { FaGithub, FaLinkedin, FaEnvelope, FaStackOverflow } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";

export default function About() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900 tilt">

      {/* Hintergrund-Schatten / Glow-Effekte */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2  h-80 w-80 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-28 h-72 w-72 rounded-full bg-indigo-400/30 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-50 left-1/3 h-80 w-80 rounded-full bg-rose-400/30 dark:bg-rose-500/20 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-4">About</h2>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* Bild rechts */}
          <div className="flex justify-center md:justify-end md:col-start-2 md:row-start-1">
            <img
              src="me.webp"
              alt="Portrait von Sebastian"
              className="w-70 h-70 md:w-70 md:h-70 rounded-full object-cover shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 pop"
            />
          </div>

          {/* Text */}
          <div className="md:col-start-1 md:row-start-1">
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 text-left">
              <p>
                I’m a platform and security-focused software engineer with a strong background in Linux and container technologies.
                I design, build, and operate containerized systems with a focus on automation, isolation, traceability and security.
              </p>
              <p>
                My work spans system architecture, networking, CI/CD pipelines and secure platform operation.
                I have a strong open-source affinity and prefer hands-on engineering over abstraction for its own sake.
              </p>
              <p>
                I’m particularly interested in attack and defense mechanisms, understanding systems by breaking and securing them,
                and continuously improving robustness through practical experience.
              </p>
            </div>

            {/* Icons links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/53845714nF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop"
              >
                <FaGithub
                  size={22}
                  className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sebastian-feustel-842a1a1ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop"
              >
                <FaLinkedin
                  size={22}
                  className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>

              <a
                href="mailto:portfolio.cake053@passinbox.com"
                aria-label="E-Mail"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop"
              >
                <FaEnvelope
                  size={22}
                  className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>

              <a
                href="https://stackoverflow.com/users/19719003/53845714nf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stackoverflow."
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop"
              >
                <FaStackOverflow
                  size={22}
                  className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>

              <a
                href="https://app.hackthebox.com/public/users/1563285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hackthebox"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop"
              >
                <SiHackthebox
                  size={22}
                  className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
