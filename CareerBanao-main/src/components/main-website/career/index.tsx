import "./career.css"
import CurrentOpening from "./CurrentOpening";
import Gallery from "./Gallery";
import Heading from "./Heading";
import JoinUs from "./JoinUs";


const Career = () => {
  return (
    <div className="relative top-[80px]">
      <Gallery/>
      <Heading />
      <JoinUs/>
      <CurrentOpening/>
    </div>
  );

};

export default Career;
