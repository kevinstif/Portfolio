import { useEffect, useState } from "react";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme ?? getSystemTheme();
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = (event) => {
      const savedTheme = localStorage.getItem("theme");

      if (!savedTheme) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Activar modo claro"
          : "Activar modo oscuro"
      }
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-border
        text-muted
        transition-colors
        hover:border-primary
        hover:text-primary
        focus:outline-none
        focus:ring-2
        focus:ring-primary
      "
    >
      {theme === "dark" ? (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;