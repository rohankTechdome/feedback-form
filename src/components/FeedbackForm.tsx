import React, { useState } from "react";

type Ratings = {
  confidence: number;
  relevance: number;
  interaction: number;
};

const FeedbackForm: React.FC = () => {
  const [ratings, setRatings] = useState<Ratings>({
    confidence: 0,
    relevance: 0,
    interaction: 0,
  });

  const [additionalThoughts, setAdditionalThoughts] = useState<string>("");

  // Maximum character limit for the textarea
  const maxLength = 200;

  // Handle textarea input change
  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalThoughts(event.target.value);
  };

  // Handle rating selection
  const handleRating = (category: keyof Ratings, value: number) => {
    setRatings({ ...ratings, [category]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Feedback submitted:", { ratings, additionalThoughts });
    alert("Check the console for the values");
    console.log(ratings.confidence);
    console.log(ratings.relevance);
    console.log(ratings.interaction);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[471px] h-auto p-[18px] border-[0.8px] border-gray-300 rounded-[12px] shadow-md bg-white flex flex-col gap-[26px]">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="font-pulp text-[18px]">Your Feedback Matters</h2>
          <button className="font-pulp text-[#5F60FA] border-[#5F60FA] border rounded-[4px] px-4 py-1">
            Skip
          </button>
        </div>

        {/* Ratings Section */}
        <div className="flex flex-col gap-[35px]">
          {(["confidence", "relevance", "interaction"] as (keyof Ratings)[]).map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-[10px]">
              <p className="font-pulp text-[14px] text-center text-[#717171]">
                {category === "confidence"
                  ? "How confident do you feel after interacting with justinterview.ai?"
                  : category === "relevance"
                  ? "How relevant were the questions to your job profile?"
                  : "How was your interaction with justinterview.ai?"}
              </p>
              <div className="flex gap-[20px]">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`text-[29px] cursor-pointer ${
                      ratings[category] >= value ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(category, value)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Thoughts Section */}
        <div className="w-full">
          <h1 className="font-inter text-[14px] text-[#717171] font-pulp">Additional Thoughts</h1>
          <textarea
            value={additionalThoughts}
            onChange={handleTextAreaChange}
            maxLength={maxLength}
            rows={4}
            className="w-full mt-2 border border-gray-300 rounded-[4px] p-2 resize-none text-[12px] placeholder-[#74747480] font-pulp"
            placeholder="Let us know how we could make your experience better"
          />
          <div
            className={`text-right mt-2 text-sm ${
              additionalThoughts.length === maxLength ? "text-red-500" : "text-gray-600"
            }`}
          >
            {additionalThoughts.length} / {maxLength}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-[200px] h-[55px] bg-[#5F60FA] text-white rounded-[4px] py-[1px] px-[16px] font-pulp shadow-md"
            onClick={handleSubmit}
            disabled={ratings.confidence === 0 || ratings.relevance === 0 || ratings.interaction === 0}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
