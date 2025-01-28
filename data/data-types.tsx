// types.tsx

export interface PersonalData {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

export interface AboutMe {
  title: string;
  body: string[];
}

export interface Skill {
  icon: string;
  text: string;
}

export interface Skills {
  kodspråk: Skill[];
  styrkor: Skill[];
}

export interface Experience {
  role: string;
  description: string;
  current: boolean;
}

export interface ProfessionalData {
  title: string;
  experiences: Experience[];
}
export interface EducationData {
  title: string;
  experiences: Experience[];
}

export interface Links {
  text:string;
  url:string;
}
export interface Projects {
  title: string;
  body1: string;
  body2: string;
  image:string;
  current:boolean;
  links: Links[];
}

export interface ProjectData {
  title: string;
  projects: Projects[];
}
