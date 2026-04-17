"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
      className="cursor-pointer"
    >
      <span>SV</span>
      <span> | </span>
      <span>EN</span>
    </div>
  );
};

export default LanguageToggle;
