import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = [
  "Linux",
  "Containers",
  "Automation",
  "Isolation",
  "Attack & Defense",
];

const Typing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
      <p className="flex flex-wrap items-center justify-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
        <span className="mr-2">I build and secure systems with a focus on</span>
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="font-semibold text-gray-900 dark:text-white"
        >
          {WORDS[index]}
        </motion.span>
      </p>
  );
}

export default Typing;