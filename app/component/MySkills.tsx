"use client";
import React, { useId, useState } from "react";
import { Skills } from "@/data/data-types";
import { useLanguage } from "../context/LanguageContext";

interface MySkillsProps {
  skills: Skills;
}

const MySkills = ({ skills }: MySkillsProps) => {
  const id = useId();
  const { language } = useLanguage();
  const { labels } = skills;
  const tabKeys = ["kompetens", "styrkor"] as const;
  const [activeTab, setActiveTab] =
    useState<(typeof tabKeys)[number]>("kompetens");

  const setBg = (active: string) =>
    activeTab === active ? "bg-green" : "bg-white";

  const setTabsAlignment = (tab: string) =>
    tab === "kompetens" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {tabKeys.map((el, i) => (
        <button
          key={`${id}_${i}`}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {labels[el][language]}
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "kompetens" ? "justify-start" : "justify-end"
      }`}
    >
      {(skills[activeTab as keyof Omit<typeof skills, "labels">] as any[])
        .sort((a, b) => a.text[language].localeCompare(b.text[language]))
        .map(({ icon, text }) => (
          <li key={text[language]} className="skill">
            <span>{icon}</span>
            {text[language]}
          </li>
        ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default MySkills;
