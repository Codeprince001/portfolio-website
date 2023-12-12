import { useState } from "react";

export const useActive = () => {
  const [activeLink, setActiveLink] = useState("home");

  return () => {
    return activeLink === "home"
      ? "active navbar-link"
      : activeLink === "skill"
        ? "active navbar-link"
        : activeLink === "project"
          ? "active navbar-link"
          : "navbar-link";
  };
};