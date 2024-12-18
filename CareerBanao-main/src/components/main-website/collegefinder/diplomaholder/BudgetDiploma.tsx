import { useState } from "react";
import { Link } from "react-router-dom";

interface BudgetDiplomaProps {
  BudgetDiplomaRanges?: string[]; // Optional prop for customizable BudgetDiploma ranges
     // Optional prop to customize the "NEXT" button path
}

const BudgetDiploma = ({ BudgetDiplomaRanges }: BudgetDiplomaProps) => {
  const [selectedBudgetDiploma, setSelectedBudgetDiploma] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Default BudgetDiploma ranges if no prop is passed
  const defaultBudgetDiplomaRanges = [
    "Less than 1 Lacs",
    "1 Lacs - 2.5 Lacs",
    "2.5 Lacs - 4.2 Lacs",
    "4.2 Lacs - 6 Lacs",
    "Above 6 Lacs",
  ];

  // Use the prop if provided, otherwise use the default ranges
  const ranges = BudgetDiplomaRanges || defaultBudgetDiplomaRanges;

  // Handle button click to set selected BudgetDiploma range
  const handleSelection = (BudgetDiploma: string) => {
    setSelectedBudgetDiploma(BudgetDiploma);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        How Much Are You Planning To Spend?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {ranges.map((BudgetDiploma, index) => (
          <button
            key={index}
            onClick={() => handleSelection(BudgetDiploma)}
            className={`${
              selectedBudgetDiploma === BudgetDiploma ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
            } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
          >
            {BudgetDiploma}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Link to={'/diplomacourse'}>
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to={'/formsub'}>
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

export default BudgetDiploma;
