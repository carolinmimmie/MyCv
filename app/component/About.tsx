"use client";

import { AboutMe, Skills } from "@/data/data-types";
import React, { useId } from "react";
import { skills } from "@/data/page-data";
import MySkills from "./MySkills";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

interface AboutMeProps {
  data: AboutMe;
  skills: Skills;
}

const About = ({ data }: AboutMeProps) => {
  const { title, body } = data;
  const { language } = useLanguage();
  const id = useId();

  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-8">
        <h2>{title[language]}</h2>
        <LanguageToggle />
      </div>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`} className="mb-6">
          {el[language]}{" "}
        </p>
      ))}

      <MySkills skills={skills} />
    </section>
  );
};

export default About;
