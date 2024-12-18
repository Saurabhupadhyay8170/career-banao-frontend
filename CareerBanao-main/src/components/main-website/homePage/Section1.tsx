import useFetch from "hooks/useFetch";
import "./home.css";
import BaseUrl from "utils/baseurl";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [data] = useFetch(`${BaseUrl}/getWhatsAppUrl`);

  return (
    <div className="section1 relative pb-[5rem]">
      <div className="section-container font-popins relative top-[80px] flex flex-col lg:flex-row">
        <div className="section-left flex flex-col p-5 gap-5 justify-center w-full lg:w-[60%]">
          <h1 className="text-[1.87rem] lg:text-[2.8rem] font-semibold">
            Admission Dreams, Crafted Realities
          </h1>
          <p className="text-[16px] lg:text-[1.4rem] mt-[2rem]">
            Dreaming of the perfect college or university? Let us turn those
            dreams into realities through our expert admission guidance and
            counselling services.
          </p>
          <Link to={data ? (data as any)[0]?.whatsApp_link : ""} target="_blank">
            <button type="button" className="bg-primaryBtn hover:bg-hoverBtn btn-shadow rounded-3xl h-[3rem] w-[11rem] text-white text-[16px] font-semibold">CHAT NOW</button>
          </Link>

        </div>
        <div className="section-right w-full lg:w-[40%]">
          <div>
            <img src="/home-hero.svg" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
