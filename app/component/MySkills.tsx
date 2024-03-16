"use client";
import React, { useId, useState } from "react";
import { Skills } from "@/data/data-types";

interface MySkillsProps {
  skills: Skills;
}

const MySkills = ({ skills }: MySkillsProps) => {
  const id = useId();
  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active: string) =>
    activeTab === active ? "bg-yellow" : "bg-grey";

  const setTabsAlignment = (tab: string) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el, i) => (
        <button
          key={`${id}_${i}`}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {skills[activeTab as keyof Skills].map(({ icon, text }) => (
        <li key={text} className="skill">
          <span>{icon}</span>
          {text}
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
