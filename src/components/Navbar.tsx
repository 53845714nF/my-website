type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-lg">Sebastian Feustel</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:underline pop">Home</a>
          <a href="#about" className="hover:underline pop">About</a>
          <a href="#skills" className="hover:underline pop">Skills</a>
          <a href="#projects" className="hover:underline pop">Projects</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition btn-3d pop"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
