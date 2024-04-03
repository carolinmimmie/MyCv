import Image from "next/image";
import About from "./component/About";
import {
  aboutMe,
  skills,
  professionalData,
  educationData,
} from "@/data/page-data";
import ProfessionalExperience from "./component/ProfessionalExperience";
import Educations from "./component/Educations";

export default function Home() {
  return (
    <div>
      <About data={aboutMe} skills={skills} />
      <ProfessionalExperience professionalData={professionalData} />
      <Educations educationData= {educationData} />
    </div>
  );
}
