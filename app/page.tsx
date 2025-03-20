import Image from "next/image";
import About from "./component/About";
import {
  aboutMe,
  skills,
  professionalData,
  educationData,
  projectData,
} from "@/data/page-data";
import ProfessionalExperience from "./component/ProfessionalExperience";
import Educations from "./component/Educations";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <div>
      <About data={aboutMe} skills={skills} />
      <Educations educationData={educationData} />
      <ProfessionalExperience professionalData={professionalData} />
      <Projects projectData={projectData}></Projects>
    </div>
  );
}
