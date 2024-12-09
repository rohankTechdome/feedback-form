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

  const handleRating = (category: keyof Ratings, value: number) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = () => {
    console.log("Feedback submitted:", { ratings, additionalThoughts });
    alert("Check the console for the values");
    console.log(ratings.confidence)
    console.log(ratings.relevance)
    console.log(ratings.interaction)
  };

  return (
    <div className="w-full h-screen border-4 flex items-center justify-between">
          <div className="max-w-[471px] max-h-full mx-auto p-[18px] border border-gray-300 rounded-[12px] shadow-md bg-white gap-[26px] flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <h2 className="font-pulp  font-normal text-[18px] text-center leading-[21.6px]">Your Feedback Matters</h2>
                <div className="flex items-center justify-center w-[56px] h-[26px] rounded-[4px] border-[1px] px-[1px] py-[16px] gap-[8px]">
                  <button className="font-pulp">Skip</button>
                </div>

              </div>
              <div className="flex flex-col gap-[35px] justify-between items-center">
              {(["confidence", "relevance", "interaction"] as (keyof Ratings)[]).map((category, index) => (
                <div key={index} className=" flex flex-col items-center justify-center p-[10px] gap-[10px]">
                  <p className="font-inter font-light text-[14px] leading-[16.94px] text-center">
                    {category === "confidence"
                      ? "How confident do you feel after interacting with Aiterview?"
                      : category === "relevance"
                      ? "How relevant were the questions to your job profile?"
                      : "How was your interaction with Aiterview?"}
                  </p>
                  <div className="flex justify-center gap-[20px] ">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`text-[29px] cursor-pointer w-[29px] h-[29px] ${
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

              <div className="py-[10px] w-[435px] h-[80px]">
                  <h1 className="font-inter w-[415px] h-[17px] font-light text-[14px] leading-[16.94px]">Additional Thoughts</h1>
                  <textarea
                    className="w-[415px] h-[80px] rounded-[4px] border-[0.5px] border-[#747474]  focus:outline-none focus:ring-2 focus:ring-blue-400 font-pulp leading-[20px] font-normal py-[6px] px-[12px] text-[12px]"
                    placeholder="Let us know what could make your experience better."
                    value={additionalThoughts}
                    onChange={(e) => setAdditionalThoughts(e.target.value)}
                  />
              </div>
              <div className="flex items-center justify-center">
                  <button
                    className="w-[200px] h-[55px] rounded-[4px] px-[16px] py-[1px] bg-[#5F60FA] text-white mt-3"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
              </div>
        </div>
    </div>
  );
};

export default FeedbackForm;
