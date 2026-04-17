// types.tsx

export type LangString = {
  sv: string;
  en: string;
};

export interface PersonalData {
  name: string;
  role: LangString;
  location: string;
  about: LangString;
  focus: LangString;
  education: LangString[];
  contactLinks: string[];
  labels: {
    contactMe: LangString;
  };
}

export interface AboutMe {
  title: LangString;
  body: LangString[];
}

export interface Skill {
  icon: string;
  text: LangString;
}

export interface Skills {
  kompetens: Skill[];
  styrkor: Skill[];
  labels: {
    kompetens: LangString;
    styrkor: LangString;
  };
}

export interface Experience {
  role: LangString;
  description: LangString;
  current: boolean;
}

export interface ProfessionalData {
  title: LangString;
  experiences: Experience[];
}

export interface EducationData {
  title: LangString;
  experiences: Experience[];
}

export interface Links {
  text: LangString;
  url: string;
}

export interface Projects {
  title: LangString;
  body1: LangString;
  body2: LangString;
  image: string;
  current: boolean;
  links: Links[];
}

export interface ProjectData {
  title: LangString;
  projects: Projects[];
}
