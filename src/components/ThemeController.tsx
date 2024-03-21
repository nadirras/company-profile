"use client";

import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";

export default function ThemeController() {
  const [theme, setTheme] = useLocalStorage("theme", "customDark");
  //soalnya keadaan di client sama server beda, biar nyamain
  const [hydrated, setHydrated] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "customDark" ? "customLight" : "customDark");
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {hydrated && theme === "customDark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
