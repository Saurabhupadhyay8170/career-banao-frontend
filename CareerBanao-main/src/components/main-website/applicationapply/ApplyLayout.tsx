// import useFetch from "hooks/useFetch";
import AdmissionFormPopup from "./AdmissionFormPopup"
import { useDispatch, useSelector } from "react-redux";
import { setShowFormPopup } from "../../../redux/showFormPopupSlice";
import CounsellingFormPopup from "./CounsellingFormPopup";
import { Carousel } from "antd";
import staticBannerImg from "assets/banner.jpg"
// import ImgSkeleton from "src/components/ui/ImgSkeleton";

function ApplyLayout({ data, location }: any) {
  const dispatch = useDispatch();
  const showAdmissionPopup = useSelector((state: any) => state.showFormPopup)
  let listData = data[data?.length - 1]?.news_event;
  listData = listData?.split(/,\s*(?=[^,]*:)/)

  // const [img, loading] = useFetch("/getBanner?category=home_common")


  return (
    <div className='apply-layout relative overflow-hidden'>
      <div className="relative top-[80px]">
        {/* <Carousel autoplay speed={1000}>
          {loading ? <ImgSkeleton /> : img?.length > 0 ?
            data.map((item: any, i: any) => {
              return (
                <div key={i}>
                  <div className="gallery-layout w-full h-[150px] md:h-[350px]">
                    {/* <img src={item?.banner_link} alt="" className="object-fill w-full h-full" /> */}
        {/* <img src={item?.banner_url || img[0].banner_link} alt="" className="object-fill w-full h-full" />
                  </div>
                </div>
              );
            }) :
            <ImgSkeleton />}
        </Carousel> */}

        <Carousel autoplay speed={1000}>
          {
                  <div>
                    <div className="gallery-layout w-full h-[150px] md:h-[350px]">
                      <img src={data[0]?.banner_url || staticBannerImg} alt="" className="object-fill w-full h-full" />
                    </div>
                  </div>
          }
        </Carousel>

        <div className="text-white latest-news flex justify-between lg:justify-center items-center bg-[#052963] p-[24px]">
          <div style={{ borderRight: "4px solid white" }} className="pr-2 flex items-center">
            <div className="flex gap-2 w-[20%] lg:flex-col lg:w-[10%] lg:text-4xl font-semibold">
              <div>Latest</div>
              <div>News</div>
            </div>
          </div>
          <div className="w-[80%] lg:w-[75%]">
            <div className="w-full marqueeContainer">
              <p className="myMarquee">{data[data?.length - 1]?.latest_news} <span className="bg-red-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded ">New</span></p>
            </div>

          </div>
        </div>

        <div className="apply-content min-h-[70vh] flex flex-col lg:flex-row lg:justify-center items-center px-[1rem] lg:px-[3rem] py-[4rem] gap-16">
          <div className="content-left flex flex-col gap-8 lg:min-w-[60%]">
            <h1 className="text-[2rem] font-semibold">Introduction</h1>
            <p className="text-[1.1rem] text-justify">{data[data?.length - 1]?.introduction}</p>

            <div className="exam-apply w-full lg:w-[30%] flex items-end">
              <button onClick={() => { dispatch(setShowFormPopup()) }} className="px-10 rounded-3xl py-3 btn-shadow bg-primaryBtn hover:bg-hoverBtn text-white font-semibold">APPLY NOW</button>
            </div>
          </div>
          <div className="content-right flex flex-col lg:min-w-[30%] gap-5">
            <h1 className="text-[2rem] font-semibold">News & Events</h1>
            <ul className="bg-[#f5f5f5] text-justify list-disc px-[2rem] py-[1rem] text-[#8f8680]">
              {listData?.map((list: any, i: any) => (<li className="m-[1rem]-" key={i + 1}>{list}</li>))}
            </ul>
          </div>
        </div>
      </div>
      {showAdmissionPopup
        ?
        location.includes("admissions")
          ? <AdmissionFormPopup collegeName={data[data?.length - 1]?.college_name} collegeCategory={data[data?.length - 1]?.college_category} />
          : <CounsellingFormPopup collegeName={data[data?.length - 1]?.college_name} collegeCategory={data[data?.length - 1]?.college_category} />
        : ""
      }
    </div>
  )
}

export default ApplyLayout;

// #052963