import { Link } from "react-router-dom";
import CardSkeleton from "ui/CardSkeleton";
import defaultLogo from "../../../assets/defaultCardLogo.jpeg";
import click_here from "../../../assets/click_here.jpg"
import no_data from "../../../assets/no_data.gif"
import { useState } from "react";

function CounselingLayout({ data, loading, category }: any) {
    const [displayCount, setDisplayCount] = useState(12);
    const handleLoadMore = () => {
        setDisplayCount(displayCount + 9); // Increase the number of records to display by 10
    };

    return (
        <div className='counselingLayout relative font-popins'>
            <div className="relative top-[80px] min-h-[70vh] pt-10">
                <h1 className="text-[24px] font-[600] font-[Open,sans-serif] text-[#515151] text-center">Admission and Counselling</h1>
                <div className="pb-20 flex w-full flex-col lg:flex-row lg:flex-wrap gap-5 p-8">
                    {loading ? <CardSkeleton /> : data?.filter((item: any) => item.hide_record == "0" && item.delete_status != "1")
                        .length > 0 ? <>
                        {data.filter((item: any) => item.hide_record == "0" && item.delete_status != "1")
                            .slice(0, displayCount)
                            .map((item: object) => {
                                return (
                                        <CounselingCard data={item} category={category}/>
                                );
                            })}

                    </> :
                        <div className="w-full h-[50vh] flex justify-center">
                            <img src={no_data} className="w-full h-[80%] object-contain mix-blend-multiply" />
                        </div>
                    }

                </div>
                {
                    displayCount < data?.filter((item: any) => item.hide_record == "0" && item.delete_status != "1").length && (
                        <div className="flex justify-center mt-4">
                            <button onClick={handleLoadMore} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                Load More
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default CounselingLayout;

function CounselingCard({ data, category }: any) {
    let collegeLogo = data.college_logo

    return (
        <>
            <div className="card-layout bg-white max-h-[210px] flex flex-col justify-between items-center w-full lg:w-[31%] p-[1rem]">
                <div className="card-row w-[100%] flex justify-center items-center lg:p-5 gap-5">
                    <div className="card-img w-[20%]">
                        <img src={collegeLogo.match(/\.(jpeg|jpg|gif|png)$/) != null ? collegeLogo : defaultLogo} alt="college_logo" className="w-[60px] h-[55px] lg:w-[100px] lg:h-[50px] rounded-[100%]" />
                    </div>
                    <div className="card-title w-[80%]">
                        <h1 className="text-m lg:text-xl font-semibold line-clamp-3">{data.college_name}</h1>
                    </div>
                </div>

                <div className="card-row w-[100%] flex lg:mt-0  mt-5 gap-4 items-center px-5">
                    <div className="icon flex justify-center items-center">
                        <img src={click_here} alt="" width={35} />
                    </div>
                    <Link to={`/counselling/${category}/apply/${data.college_name}`} className="underline text-blue-500 ">CLICK HERE</Link>
                </div>
            </div>
        </>
    );
}

// remove from link
// onClick={()=>{dispatch(setApplyData(data))}} 
