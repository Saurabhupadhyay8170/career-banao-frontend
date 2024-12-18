import { useState } from "react";
import { Link } from "react-router-dom";

const EMI = () => {
  const [selectedEMI, setSelectedEMI] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of education EMIs
  const EmployQue = [
    { label: "Yes", path: "/formsub" },
    { label: "No", path: "/formsub" }
  ];

  // Handle button click to set selected education EMI
  const handleSelection = (EMI: string) => {
    setSelectedEMI(EMI);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  // Find the path corresponding to the selected EMI
  const selectedPath = EmployQue.find(
    (EMI) => EMI.label === selectedEMI
  )?.path;

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
      Want To Avail Flexible Payment Through EMIs?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {EmployQue.map((EMI, index) => (
          <button
            key={index}
            onClick={() => handleSelection(EMI.label)}
            className={`${
              selectedEMI === EMI.label ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {EMI.label}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to="/budget">
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

export default EMI;
