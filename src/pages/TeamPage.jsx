import { useState } from "react";
import IndividualTeamMember from "../components/IndividualTeamMember";
import NicholasFong from "../assets/OurTeam/NicholasFong.jpg";
import AmyYin from "../assets/OurTeam/AmyYin.jpg";
import AshvikaAhuja from "../assets/OurTeam/AshvikaAhuja.jpg";
import AustinCu from "../assets/OurTeam/AustinCu.jpg";
import AzaadOmer from "../assets/OurTeam/AzaadOmer.png";
import BriannaLung from "../assets/OurTeam/BriannaLung.jpg";
import HaleyCorcoran from "../assets/OurTeam/HaleyCorcoran.jpg";
import HannahLee from "../assets/OurTeam/HannahLee.jpg";
import KatelynYue from "../assets/OurTeam/KatelynYue.jpg";
import MichellePeng from "../assets/OurTeam/MichellePeng.jpg";
import NainikaSanghvi from "../assets/OurTeam/NainikaSanghvi.jpg";
import SarahYang from "../assets/OurTeam/SarahYang.jpg";
import SimarDhillon from "../assets/OurTeam/SimarDhillon.jpg";
import ZachRai from "../assets/OurTeam/ZachRai.jpg";

function TeamPage() {
  const [activeCategory, setActiveCategory] = useState("Leadership");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const NicholasFongObject = {
    Name: "Nicholas Fong",
    Position: "Technology Director",
    TeamImage: NicholasFong,
    Specialization: "Business and Computer Science",
    Gmail: "nicholas.fong@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/nicholas-fong-1425b8221",
  };

  const AmyYinObject = {
    Name: "Amy Yin",
    Position: "Regional Coordinator",
    TeamImage: AmyYin,
    Specialization: "",
    Gmail: "amy@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/amyyin",
  };

  const AshvikaAhujaObject = {
    Name: "Ashvika Ahuja",
    Position: "Regional Coordinator",
    TeamImage: AshvikaAhuja,
    Specialization: "",
    Gmail: "ashvika@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/ashvikahuja",
  };

  const AustinCuObject = {
    Name: "Austin Cu",
    Position: "Regional Coordinator",
    TeamImage: AustinCu,
    Specialization: "",
    Gmail: "austin@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/austincu",
  };

  const AzaadOmerObject = {
    Name: "Azaad Omer",
    Position: "Vice Chair",
    TeamImage: AzaadOmer,
    Specialization: "Event Planning",
    Gmail: "azaad@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/azaadomer",
  };

  const BriannaLungObject = {
    Name: "Brianna Lung",
    Position: "Marketing Director",
    TeamImage: BriannaLung,
    Specialization: "Accounting",
    Gmail: "brianna.lung@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/briannalung",
  };

  const HaleyCorcoranObject = {
    Name: "Haley Corcoran",
    Position: "Regional Coordinator",
    TeamImage: HaleyCorcoran,
    Specialization: "Accounting",
    Gmail: "haley@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/haleycorcoran",
  };

  const HannahLeeObject = {
    Name: "Hannah Lee",
    Position: "Regional Coordinator",
    TeamImage: HannahLee,
    Specialization: "",
    Gmail: "hannah@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/hannahlee",
  };

  const KatelynYueObject = {
    Name: "Katelyn Yue",
    Position: "Chair",
    TeamImage: KatelynYue,
    Specialization: "Finance",
    Gmail: "katelyn@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/katelynyue",
  };

  const MichellePengObject = {
    Name: "Michelle Peng",
    Position: "Creative Director",
    TeamImage: MichellePeng,
    Specialization: "Marketing",
    Gmail: "michelle@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/michellepeng",
  };

  const NainikaSanghviObject = {
    Name: "Nainika Sanghvi",
    Position: "Regional Coordinator",
    TeamImage: NainikaSanghvi,
    Specialization: "Marketing",
    Gmail: "nainika.sanghvi@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/nainika-sanghvi",
  };

  const SarahYangObject = {
    Name: "Sarah Yang",
    Position: "Regional Coordinator",
    TeamImage: SarahYang,
    Specialization: "",
    Gmail: "sarah@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/sarahyang",
  };

  const SimarDhillonObject = {
    Name: "Simar Dhillon",
    Position: "Regional Coordinator",
    TeamImage: SimarDhillon,
    Specialization: "Accounting",
    Gmail: "simar@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/simardhillon",
  };

  const ZachRaiObject = {
    Name: "Zach Rai",
    Position: "Logistics Director",
    TeamImage: ZachRai,
    Specialization: "Organizational Behaviour and Human Resources",
    Gmail: "zach.rai@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/zachrai",
  };

  return (
    <div className="bg-blue-950 md:pt-28">
      <div className="min-h-screen ">
        <div className="p-4">
          <div className="flex flex-col items-center">
            <h2 className="pt-30 text-4xl md:text-6xl font-bold text-white mb-3 md:mb-5">
              Our Team
            </h2>
            <p className="text-base md:text-lg font-semibold text-white">
              Campus Ambassador Program 2023
            </p>
          </div>

          <div
            className={`mt-5 flex flex-wrap justify-center ${
              activeCategory !== "Leadership" ? "mt-4" : ""
            }`}
          >
            {/* Adjust margin for mobile and larger screens */}
            <button
              className={`font-semibold rounded-full px-2 md:px-4 py-1 md:py-2 mx-1 md:mx-2 ${
                activeCategory === "Leadership"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-blue-950"
              }`}
              onClick={() => handleCategoryClick("Leadership")}
            >
              Leadership
            </button>
            <button
              className={`font-semibold rounded-full px-2 md:px-4 py-1 md:py-2 mx-1 md:mx-2 ${
                activeCategory === "Directors"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-blue-950"
              }`}
              onClick={() => handleCategoryClick("Directors")}
            >
              Directors
            </button>
            <button
              className={`font-semibold rounded-full px-2 md:px-4 py-1 md:py-2 mx-1 md:mx-2 ${
                activeCategory === "Regional Co-ordinators"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-blue-950"
              }`}
              onClick={() => handleCategoryClick("Regional Co-ordinators")}
            >
              Regional Coordinators
            </button>
          </div>

          <div className="flex flex-wrap justify-center mt-4">
            {/* Render team members based on the active category */}
            {activeCategory === "Leadership" && (
              <>
                <IndividualTeamMember
                  Name={KatelynYueObject.Name}
                  Position={KatelynYueObject.Position}
                  TeamImage={KatelynYueObject.TeamImage}
                  Specialization={KatelynYueObject.Specialization}
                  Gmail={KatelynYueObject.Gmail}
                  LinkedIn={KatelynYueObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={AzaadOmerObject.Name}
                  Position={AzaadOmerObject.Position}
                  TeamImage={AzaadOmerObject.TeamImage}
                  Specialization={AzaadOmerObject.Specialization}
                  Gmail={AzaadOmerObject.Gmail}
                  LinkedIn={AzaadOmerObject.LinkedIn}
                />
              </>
            )}
            {activeCategory === "Directors" && (
              <>
                <IndividualTeamMember
                  Name={NicholasFongObject.Name}
                  Position={NicholasFongObject.Position}
                  TeamImage={NicholasFongObject.TeamImage}
                  Specialization={NicholasFongObject.Specialization}
                  Gmail={NicholasFongObject.Gmail}
                  LinkedIn={NicholasFongObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={BriannaLungObject.Name}
                  Position={BriannaLungObject.Position}
                  TeamImage={BriannaLungObject.TeamImage}
                  Specialization={BriannaLungObject.Specialization}
                  Gmail={BriannaLungObject.Gmail}
                  LinkedIn={BriannaLungObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={ZachRaiObject.Name}
                  Position={ZachRaiObject.Position}
                  TeamImage={ZachRaiObject.TeamImage}
                  Specialization={ZachRaiObject.Specialization}
                  Gmail={ZachRaiObject.Gmail}
                  LinkedIn={ZachRaiObject.LinkedIn}
                />

                <IndividualTeamMember
                  Name={MichellePengObject.Name}
                  Position={MichellePengObject.Position}
                  TeamImage={MichellePengObject.TeamImage}
                  Specialization={MichellePengObject.Specialization}
                  Gmail={MichellePengObject.Gmail}
                  LinkedIn={MichellePengObject.LinkedIn}
                />
              </>
            )}
            {activeCategory === "Regional Co-ordinators" && (
              <>
                <IndividualTeamMember
                  Name={SimarDhillonObject.Name}
                  Position={SimarDhillonObject.Position}
                  TeamImage={SimarDhillonObject.TeamImage}
                  Specialization={SimarDhillonObject.Specialization}
                  Gmail={SimarDhillonObject.Gmail}
                  LinkedIn={SimarDhillonObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={HaleyCorcoranObject.Name}
                  Position={HaleyCorcoranObject.Position}
                  TeamImage={HaleyCorcoranObject.TeamImage}
                  Specialization={HaleyCorcoranObject.Specialization}
                  Gmail={HaleyCorcoranObject.Gmail}
                  LinkedIn={HaleyCorcoranObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={AmyYinObject.Name}
                  Position={AmyYinObject.Position}
                  TeamImage={AmyYinObject.TeamImage}
                  Specialization={AmyYinObject.Specialization}
                  Gmail={AmyYinObject.Gmail}
                  LinkedIn={AmyYinObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={AshvikaAhujaObject.Name}
                  Position={AshvikaAhujaObject.Position}
                  TeamImage={AshvikaAhujaObject.TeamImage}
                  Specialization={AshvikaAhujaObject.Specialization}
                  Gmail={AshvikaAhujaObject.Gmail}
                  LinkedIn={AshvikaAhujaObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={AustinCuObject.Name}
                  Position={AustinCuObject.Position}
                  TeamImage={AustinCuObject.TeamImage}
                  Specialization={AustinCuObject.Specialization}
                  Gmail={AustinCuObject.Gmail}
                  LinkedIn={AustinCuObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={HannahLeeObject.Name}
                  Position={HannahLeeObject.Position}
                  TeamImage={HannahLeeObject.TeamImage}
                  Specialization={HannahLeeObject.Specialization}
                  Gmail={HannahLeeObject.Gmail}
                  LinkedIn={HannahLeeObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={NainikaSanghviObject.Name}
                  Position={NainikaSanghviObject.Position}
                  TeamImage={NainikaSanghviObject.TeamImage}
                  Specialization={NainikaSanghviObject.Specialization}
                  Gmail={NainikaSanghviObject.Gmail}
                  LinkedIn={NainikaSanghviObject.LinkedIn}
                />
                <IndividualTeamMember
                  Name={SarahYangObject.Name}
                  Position={SarahYangObject.Position}
                  TeamImage={SarahYangObject.TeamImage}
                  Specialization={SarahYangObject.Specialization}
                  Gmail={SarahYangObject.Gmail}
                  LinkedIn={SarahYangObject.LinkedIn}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
