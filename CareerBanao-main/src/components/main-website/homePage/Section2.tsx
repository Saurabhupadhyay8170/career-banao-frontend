import "./home.css";

const Section2 = () => {
  return (
    <div className="section2 flex flex-col lg:flex-row w-full lg:p-1 my-[5rem]">
      <div className="section2-left w-full lg:w-[55%]">
        <p className="lg:text-[43px] text-[20px] font-semibold">Empowering Institutions,</p>
        <h1 className="lg:text-[40px] text-[20px] font-semibold">Elevating Digital Enrollments</h1>
        <p className="text-gray-500 mt-[1rem] lg:text-[23px] text-[18px] lg:font-normal font-semibold text-justify">Are you a higher institution looking for enrollment solutions ? <br /> Our innovative approach enhances efficiency, streamlines admissions, and boosts enrollment numbers, ensuring that colleges and universities can stay ahead in the competitive world of admissions. </p>
      </div>
       <div className="section2-right flex flex-col my-3 gap-3 px-2 w-full lg:w-[45%]">
        <div className="section-2-row flex gap-3 flex-col lg:flex-row items-center lg:justify-between">
         <div className="img-card flex justify-center items-center w-full h-full">
           <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/Bennett_University.webp" />
         </div>
         <div className="img-card flex justify-center items-center w-full h-full">
           <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/products.png" />
         </div>
        </div>

        <div className="section-2-row flex justify-center">
          <div className="img-card flex justify-center items-center">
            <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/1631180032phpvUgTqj.jpeg" />
          </div>
        </div>
       </div>
    </div>
  );
};

export default Section2;
