"use client";

import React from "react";
import { Envelope, Linkedin } from "./icons";
import Image from "next/image";
import { PersonalData } from "../../data/data-types";
import { useLanguage } from "../context/LanguageContext";

interface SidebarProps {
  data: PersonalData;
}

const Sidebar = ({ data }: SidebarProps) => {
  const { name, location, about, focus, education, contactLinks, labels } =
    data;
  const { language } = useLanguage();

  return (
    <div className="bg-black flex flex-col content-between w-full p-2 h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col items-center ">
        <Image
          priority
          width={200}
          height={200}
          className="rounded-full h-full m-6"
          src="/images/profile.png"
          alt="profilepic for cv"
        />

        <div className="text-center px-6">
          {/* HEADER */}
          <h1>{name}</h1>
          {/* <h3 className="mb-4 uppercase">{location}</h3> */}

          {/* EDUCATION (nu mer som sektion) */}
          <div className="mb-5">
            <p className="mb-1">{education[0][language]}</p>
            <p className="mb-1">{education[1][language]}</p>
          </div>
          {/* <h3 className="mb-2">OM MIG</h3>
          <p className="mb-5 text-sm">{about[language]}</p> */}

          {/* CONTACT (tydligare footer-känsla) */}
          <div className="text-white text-center mt-6 sm:mt-8">
            <h3 className="mb-2">{labels.contactMe[language]}</h3>

            <aside className="mb-3">073 - 051 22 84</aside>

            <div className="flex flex-row justify-center gap-2">
              <a
                className="icons-contactme"
                href={contactLinks?.[0]}
                aria-label="email link"
              >
                <Envelope />
              </a>

              <a
                className="icons-contactme"
                href={contactLinks?.[1]}
                aria-label="linkedin link"
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
