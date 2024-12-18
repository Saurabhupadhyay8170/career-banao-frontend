// home page for the website
import Section1 from "components/main-website/homePage/Section1";
import Section2 from "components/main-website/homePage/Section2";
import Section3 from "components/main-website/homePage/Section3";
import Section4 from "components/main-website/homePage/Section4";
import Section5 from "components/main-website/homePage/Section5";
import Section6 from "components/main-website/homePage/Section6";
import CollegeFound from "src/components/main-website/homePage/CollegeFound";
import HomeFaq from "src/components/main-website/homePage/HomeFaq";
import SliderYoutube from "src/components/main-website/homePage/SliderYoutube";
import UnivercitiesLogoSlider from "src/components/main-website/homePage/UnivercitiesLogoSlider";
import PrivacyForm from "src/components/main-website/privacypolicy/PrivacyForm";
function HomePage() {
  return (
    <div className="relative p-[20px] overflow-x-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
      <CollegeFound/>
      <Section4 />
      <div className="mt-5"><UnivercitiesLogoSlider/></div>
      <Section5 />
      <div className="mt-3"><SliderYoutube/></div>
      <Section6 />
      <PrivacyForm/>
      <HomeFaq/>
    </div>
  );
}

export default HomePage;
