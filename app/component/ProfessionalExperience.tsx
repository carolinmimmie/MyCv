"use client";

import { ProfessionalData } from "@/data/data-types";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface ProfessionalExperienceProps {
  professionalData: ProfessionalData;
}

const ProfessionalExperience = ({
  professionalData,
}: ProfessionalExperienceProps) => {
  const { title, experiences } = professionalData;
  const { language } = useLanguage();

  return (
    <section>
      <h2 className="mb-6 max-w-full"> {title[language]}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ role, description, current }) => (
          <div key={role[language]} className="flex flex-col rounded-lg">
            <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md">
              <h3>{role[language]}</h3>
              <p className="mt-2">{description[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
