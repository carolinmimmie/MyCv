import Image from "next/image";
import About from "./component/About";
import { aboutMe, skills, professionalData } from "@/data/page-data";
import ProfessionalExperience from "./component/ProfessionalExperience";

export default function Home() {
  return (
    <div>
      <About data={aboutMe} skills={skills} />
      <ProfessionalExperience professionalData={professionalData} />
    </div>
  );
}
