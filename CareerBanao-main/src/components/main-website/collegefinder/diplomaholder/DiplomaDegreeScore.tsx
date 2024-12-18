import { useState } from "react";
import { Link } from "react-router-dom";

const DiplomaDegreeScore = () => {
  const [selectedDegree, setSelectedDegree] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of Degree ranges
  const DegreeRanges = [
    "Below 50%",
    "50% - 80%",
    "Above 80%",
  ];

  // Handle button click to set selected Degree range
  const handleSelection = (Degree: string) => {
    setSelectedDegree(Degree);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What Was Your Score In Last Degree??
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {DegreeRanges.map((Degree, index) => (
          <button
            key={index}
            onClick={() => handleSelection(Degree)}
            className={`${
              selectedDegree === Degree ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {Degree}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to="/first">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to="/diplomaqus">
          <button
            className={`${
              canProceed ? "bg-[#1F618D]" : "bg-gray-400 cursor-not-allowed"
            } text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
            disabled={!canProceed}
          >
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiplomaDegreeScore;
