import { motion } from "framer-motion";
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";
import defaultLogo from "../../../assets/defaultCardLogo.jpeg";
import no_data_found from "../../../assets/no_data.gif";

type ExamCardType = {
  data?: AdmissionEngineeringDataType | null; // Allow data to be null or undefined
  category: string;
  isLoading: boolean; // Prop to control skeleton display
};

function ExamCard({ data, isLoading }: ExamCardType) {
  // If the card is in the loading state, show a loading placeholder
  if (isLoading) {
    return (
      <div className="layout-container-right pb-5 flex flex-col gap-6 w-full min-h-[50vh] lg:w-[78%]">
        <img
          src={no_data_found}
          className="w-full h-[50%] object-contain mix-blend-multiply"
          alt="Loading..."
        />
      </div>
    );
  }

  // If no data is passed, show "No Data Found"
  if (!data) {
    return (
      <div className="layout-container-right pb-5 flex flex-col gap-6 w-full min-h-[50vh] lg:w-[78%]">
        <img
          src={no_data_found}
          className="w-full h-[50%] object-contain mix-blend-multiply"
          alt="No Data Found"
        />
      </div>
    );
  }

  const collegeLogo =
    data?.college_logo?.match(/\.(jpeg|jpg|gif|png)$/)
      ? data.college_logo
      : defaultLogo;

  const collegeName = data?.college_name || "College Name Not Available";
  const collegeAddress = data?.college_address || "Address Not Provided";
  const lastDate = data?.Last_date || "No Last Date Available";
  const introduction = data?.introduction || "Introduction Not Provided";
  const collegeCategory = data?.college_category || "Unknown Category";

  // Parsing and validating the Last_date field
  const today = new Date();
  const parsedLastDate = new Date(lastDate);

  // Debugging outputs
  console.log("Raw Last_date:", lastDate);
  console.log("Parsed Last_date:", parsedLastDate);
  console.log("Is Last_date Valid:", parsedLastDate >= today);

  // Check if the parsed last date is valid and not in the past
  const isLastDateValid =
    lastDate !== "No Last Date Available" &&
    !isNaN(parsedLastDate.getTime()) && // Ensure the parsed date is valid
    parsedLastDate >= today;

  if (!isLastDateValid) {
    return (
      <div className="layout-container-right pb-5 flex flex-col gap-6 w-full min-h-[50vh] lg:w-[78%]">
        <img
          src={no_data_found}
          className="w-full h-[50%] object-contain mix-blend-multiply"
          alt="No Data Found"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col p-6 rounded-lg shadow-md border border-orange-200 hover:shadow-lg transition-transform transform hover:scale-105 mb-5 font-poppins"
      style={{
        minHeight: "220px",
        maxHeight: "260px",
        backgroundColor: "rgb(255, 255, 255)", // Set background color to white
        fontFamily: "'Poppins', sans-serif", // Add font-family inline
      }}
    >
      {/* Last Date Badge */}
      <div
        className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold shadow-md"
        style={{
          background: "#ff8c28", // Orange
          color: "black", // Black text
        }}
      >
        Last Date: {lastDate}
      </div>

      {/* Top Section */}
      <div className="flex items-start gap-3">
        <div
          className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-md border"
          style={{
            borderColor: "lightorange",
            borderWidth: "2px",
          }}
        >
          <img
           src={collegeLogo}
           alt={`${collegeName} logo`} 
           className="w-full h-full object-cover rounded-full"
          />

        </div>

        <div className="flex-1">
          <h2 className="font-bold text-md text-gray-900">{collegeName}</h2>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <MapPinIcon className="h-4 w-4 text-orange-500" />
            {collegeAddress}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <BuildingOffice2Icon className="h-4 w-4 text-orange-500" />
            <span className="inline-block text-xs font-medium text-white bg-orange-500 rounded-full px-2 py-0.5">
              {collegeCategory}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-3 space-y-1">
        <div>
          <span className="font-semibold text-gray-700">Introduction:</span>
          <p className="text-gray-700 mt-1 text-xs line-clamp-2">
            {introduction}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end mt-3">
        <a
          href={data?.apply_link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-white rounded-md font-semibold transition-all text-sm"
          style={{
            background: "linear-gradient(90deg, #FFA500, #FF7F50, #FFA500)",
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 3s infinite",
          }}
        >
          APPLY NOW
        </a>
      </div>
    </motion.div>
  );
}

export default ExamCard;