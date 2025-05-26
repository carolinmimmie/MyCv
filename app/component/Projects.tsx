import { ProjectData } from "@/data/data-types";
import React from "react";
import Github from "./icons/github";
import Window from "./icons/window";
import Image from "next/image";

interface ProjectDataProps {
  projectData: ProjectData;
}

const Projects = ({ projectData }: ProjectDataProps) => {
  const { title, projects } = projectData;

  return (
    <section>
      <h2 className="mb-6"> {title}</h2>

      <div className="flex flex-col gap-6">
        {projects.map(({ title, body1, body2, image, current, links }) => (
          <div key={title} className="flex flex-col rounded-lg">
            <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md ">
              <Image
                aria-label={`$Image of ${title}`}
                src={image}
                alt={`$Image of ${title}`}
                className={" w-full h-48 object-cover"}
                priority={false}
                width={500}
                height={500}
              />

              <h3 className="mt-2">{title}</h3>
              <div className="flex flex-col gap-6 ">
                <p className="mt-2">{body1}</p>
                <p className="mt-2">{body2}</p>
              </div>
              <div className="flex flex-row mt-4 justify-between">
                <a href={links[0].url} className="flex items-center">
                  <Github className="icons-contactme" />
                  <span className="text-black"> {links[0].text}</span>
                </a>
                <a href={links[1].url} className="flex items-center">
                  <Window className="icons-contactme" />
                  <span className="text-black"> {links[1].text}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
