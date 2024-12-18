import { useState } from "react";
import { Link } from "react-router-dom";

const DiplomaMode = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of education levels
  const EmployQue = [
    { label: "Regular Mode", path: "/diplomacourse" },
    { label: "Online Mode", path: "/onlinemode" }
  ];

  // Handle button click to set selected education level
  const handleSelection = (level: string) => {
    setSelectedLevel(level);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  // Find the path corresponding to the selected level
  const selectedPath = EmployQue.find(
    (level) => level.label === selectedLevel
  )?.path;

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Mode of degree
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {EmployQue.map((level, index) => (
          <button
            key={index}
            onClick={() => handleSelection(level.label)}
            className={`${
              selectedLevel === level.label ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {level.label}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to="/diplomaqus">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to={selectedPath || "#"}>
          <button
            className={`${
              canProceed ? "bg-[#1F618D]" : "bg-gray-400 cursor-not-allowed"
            } text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
            disabled={!canProceed}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiplomaMode;
