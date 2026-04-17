"use client";

import { EducationData } from "@/data/data-types";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface EducationDataProps {
  educationData: EducationData;
}

const Educations = ({ educationData }: EducationDataProps) => {
  const { title, experiences } = educationData;
  const { language } = useLanguage();

  return (
    <section>
      <h2 className="mb-6"> {title[language]}</h2>
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

export default Educations;
