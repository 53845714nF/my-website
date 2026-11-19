import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "../i18n/context";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mql = window.matchMedia(reducedMotionQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

export default function Typing() {
  const { t } = useLanguage();
  const words = t.hero.words;
  const [index, setIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion);

  useEffect(() => {
    // With reduced motion, keep a single static word instead of rotating.
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length, reducedMotion]);

  const word = words[reducedMotion ? 0 : index % words.length];

  return (
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 min-h-[3.5em] md:min-h-[2em]">
      {t.hero.lead}{" "}
      {/* Changing the key remounts the span, which replays the CSS animation */}
      <span key={word} className="word-in font-semibold text-gray-900 dark:text-white">
        {word}
      </span>
    </p>
  );
}
