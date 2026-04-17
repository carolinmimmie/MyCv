"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => setLanguage("sv")}>SV</button>
      <span> | </span>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
};

export default LanguageToggle;
