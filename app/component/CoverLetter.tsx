import { AboutMe } from "@/data/data-types";
import React, { useId } from "react";

interface CoverLetterProps {
  data: AboutMe;
}

const CoverLetter = ({ data }: CoverLetterProps) => {
  const { title, body } = data;
  const id = useId();

  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((text, index) => (
        <p key={`${id}_${index}`} className="mb-6">
          {text}
        </p>
      ))}
    </section>
  );
};

export default CoverLetter;
