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
    Specialization: "Organizational Behaviour and Human Resources",
    Gmail: "amy.yin@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/amywyin/",
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
    Specialization: "Operations Logistics and Accounting",
    Gmail: "Austin.cu@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/austin-cu-a91676170",
  };

  const AzaadOmerObject = {
    Name: "Azaad Omer",
    Position: "Vice Chair",
    TeamImage: AzaadOmer,
    Specialization: "Accounting",
    Gmail: "azaad.omer@cus.ca",
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
    Specialization: "Marketing",
    Gmail: "hannah.lee@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/ihannahlee/",
  };

  const KatelynYueObject = {
    Name: "Katelyn Yue",
    Position: "Chair",
    TeamImage: KatelynYue,
    Specialization: "Finance",
    Gmail: "katelyn.yue@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/katelyn-yue/",
  };

  const MichellePengObject = {
    Name: "Michelle Peng",
    Position: "Creative Director",
    TeamImage: MichellePeng,
    Specialization: "Marketing",
    Gmail: "michelle.peng@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/michellepeng15/",
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
    Specialization: "Accounting",
    Gmail: "sara.yang@cus.ca",
    LinkedIn: "https://www.linkedin.com/in/sara-y-520a73243",
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
    <div className="bg-blue-950 min-h-screen flex flex-col justify-center items-center pt-20">
    <div className="p-4 max-w-screen-lg">
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
                  Intended={true}
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
                  Intended={true}
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
                  Intended={true}
                />
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
