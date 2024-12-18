import { useState } from "react";
import { Link } from "react-router-dom";

const Score10th = () => {
  const [selectedScore10th, setSelectedScore10th] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of score10th ranges
  const score10thRanges = [
    "Below 50%",
    "50% - 80%",
    "Above 80%",
  ];

  // Handle button click to set selected score10th range
  const handleSelection = (score10th: string) => {
    setSelectedScore10th(score10th);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What Was Your Score In 10th?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {score10thRanges.map((score10th, index) => (
          <button
            key={index}
            onClick={() => handleSelection(score10th)}
            className={`${
              selectedScore10th === score10th ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {score10th}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to="/first">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to="/question10th">
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

export default Score10th;
