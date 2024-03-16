import { AboutMe, Skills } from "@/data/data-types";
import React, { useId } from "react";
import { skills } from "@/data/page-data";
import MySkills from "./MySkills";
interface AboutMeProps {
  data: AboutMe;
  skills:Skills;
}
const About = ({ data }: AboutMeProps) => {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`} className="mb-6">
          {el}{" "}
        </p>
      ))}
      <MySkills skills={skills} />
    </section>
  );
};

export default About;
