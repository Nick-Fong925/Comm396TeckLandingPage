import footer from "../assets/footer.png";
import ContactUs from "../assets/ContactUs.png";
import ourStories from "../assets/ourStories.png";
import Members from "../assets/Members.png";
import Sustainability from "../assets/Sustainability.png";
import Operations from "../assets/Operations.png";
import LandingPageImage from "../components/LandingPageImage";

function Landing() {
  return (
    <>
      <LandingPageImage />
      <img className="" src={Sustainability}></img>
      <img className="" src={Operations}></img>
      <img className="" src={Members}></img>
      <img className="" src={ourStories}></img>
      <img className="" src={ContactUs}></img>
      <img className="" src={footer}></img>
    </>
  );
}

export default Landing;
