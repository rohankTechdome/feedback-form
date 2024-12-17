import React from "react";

type PauseCardProps = {
  onNext: () => void;
  onBack: () => void;
};

const PauseCard: React.FC<PauseCardProps> = ({ onNext, onBack }) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-blue-500" style={{ width: "60%" }}></div>
      </div>

      {/* Text */}
      <p className="text-gray-700 text-sm mb-6">
        Pause the interview at any point of time if you want to continue the interview later.
      </p>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PauseCard;
