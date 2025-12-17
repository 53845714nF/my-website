import Typing from "./Typing";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900 tilt">

      {/* Hintergrund-Schatten / Glow-Effekte */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 h-64 w-64 rounded-full bg-pink-400/40 dark:bg-pink-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-purple-400/30 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-3xl" />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 pop">Hi, I'm Sebastian Feustel</h1>
      <Typing/>
      <div className="flex space-x-4">
        <a href="#projects" className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 btn-3d pop">
          View Projects →
        </a>

        <a href="mailto:portfolio.cake053@passinbox.com" className="border border-gray-400 dark:border-gray-600 px-4 py-2 btn-3d pop hover:bg-gray-100 dark:hover:bg-gray-700">
          Get In Touch ✉️
        </a>
      </div>

    </div>
  );
}

export default Hero;