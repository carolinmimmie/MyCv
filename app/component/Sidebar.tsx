import React from "react";
import { Envelope, Linkedin } from "./icons";
import Image from "next/image";
import { PersonalData } from "../../data/data-types";

interface SidebarProps {
  data: PersonalData;
}

const Sidebar = ({ data }: SidebarProps) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col items-center ">
        <Image
          priority
          width={200}
          height={200}
          className="rounded-full h-full m-6"
          src="/images/profile.png"
          alt="profilepic for cv"
        />
        <div className="text-center">
          <h1 className="mb-2">{name}</h1>
          <h2 className="mb-8">{role}</h2>
          <p className="mb-2">{education[0]}</p>
          <p className="mb-2 ">{education[1]}</p>
          <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2"> KONTAKTA MIG</h3>
          <aside>073 - 051 22 84</aside>
          <div className="flex flex-row justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks[1]}
              aria-label={"linkedin link"}
            >
              
              <Linkedin />
            </a>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
