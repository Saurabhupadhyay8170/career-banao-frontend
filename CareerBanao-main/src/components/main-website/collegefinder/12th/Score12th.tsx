import { useState } from "react";
import { Link } from "react-router-dom";

const Score12th = () => {
  const [selectedScore12th, setSelectedScore12th] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of score12th ranges
  const score12thRanges = [
    "Below 50%",
    "50% - 80%",
    "Above 80%",
  ];

  // Handle button click to set selected score12th range
  const handleSelection = (score12th: string) => {
    setSelectedScore12th(score12th);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What Was Your Score In 12th?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {score12thRanges.map((score12th, index) => (
          <button
            key={index}
            onClick={() => handleSelection(score12th)}
            className={`${
              selectedScore12th === score12th ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {score12th}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to="/first">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to="/question12th">
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

export default Score12th;
