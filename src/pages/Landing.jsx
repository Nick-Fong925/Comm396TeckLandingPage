import LandingMission from "../components/LandingPage/LandingMission";
import LandingEvents from "../components/LandingPage/LandingEvents";
import LandingCapInfo from "../components/LandingPage/LandingCapInfo";
import HeaderImage from '../components/LandingPage/HeaderImage';
import LandingHighlightedEvents from "../components/LandingPage/LandingHighlighedEvents";
import LandingHighSchoolNearyou from "../components/LandingPage/LandingHighschoolNearyou";
function Landing() {
  return (
  <>
  <HeaderImage/>

  <LandingMission />
  
  <LandingHighSchoolNearyou/>
  <LandingCapInfo/>
  <LandingEvents/>
  <LandingHighlightedEvents/> 
  </>);
}

export default Landing;
