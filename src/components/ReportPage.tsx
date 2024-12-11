import React from "react";
import arrowDownward from "../assets/arrowDownward.svg";
import instagram from "../assets/instagramsvg.svg";
import facebook from "../assets/facebooksvg.svg";
import linkedin from "../assets/linkedinsvg.svg";
import twitter from "../assets/twittersvg.svg";
import AccuracyChart from "./AccuracyChart";
import SemiPie from "./SemiCirclePieChart";
import fallback from "../assets/fallback.svg";

type ReportData = {
  name: string;
  jobRole: string;
  questionsAnswered: number;
  totalQuestions: number;
  answerAccuracy: number[];
  roleFitPercentage: number;
  email: string;
};
export const exampleData: ReportData = {
  name: "Yanni Rohan Kommathoti",
  jobRole: "SDE",
  questionsAnswered: 3,
  totalQuestions: 5,
  answerAccuracy: [1, 2, 4, 5, 3, 5, 4, 5], // Example accuracy data
  roleFitPercentage: 80, // 67% fit
  email: "john.davidson@gmail.com",
};
const chartData = exampleData.answerAccuracy.map((accuracy, index) => ({
  question: index + 1, // X-axis: Question number
  accuracy, // Y-axis: Accuracy
}));

const exampleDataGraph = [
  { name: "Completed", value: exampleData.roleFitPercentage },
  { name: "Remaining", value: 100 - exampleData.roleFitPercentage },
];

const ReportPage: React.FC<{ data: ReportData }> = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="w-full max-w-[1294px] bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-center sm:text-left">Your Interview Report is here.</h1>
          <button className="w-full sm:w-[119px] md:w-28 lg:w-32 h-10 sm:h-[40px] border rounded py-1 flex items-center justify-center gap-2 sm:gap-4 bg-[#5F60FA] text-white mt-2 sm:mt-0">
            <img src={arrowDownward} alt="downwardsarrow" className="lg:w-4 sm:w-5 md:w-6" />
            <span className="text-sm sm:text-base md:text-lg">Download</span>
          </button>
        </div>

        {/* User Details */}
        <div className="mb-4 sm:mb-6 md:mb-8 gap-2 sm:gap-4 flex flex-col">
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#121212]">
            Name: <span className="font-normal text-[#5E5E5E]">{data.name}</span>
          </p>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#121212]">
            Job Role: <span className="font-normal text-[#5E5E5E]">{data.jobRole}</span>
          </p>
        </div>

        {/* Metrics Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4">
          {/* Number of Questions Answered */}
          <div className="w-full sm:w-[291px] lg:w-1/3 h-[253px] border rounded shadow p-4 flex flex-col items-start gap-2">
            <h3 className="text-center text-sm sm:text-base md:text-lg w-full">Number of questions answered</h3>
            <div className="w-full flex-1 flex items-center justify-center">
              <div className="w-[262px] h-[139px] sm:h-24 md:h-28 rounded bg-[#F9F9FF] flex items-center justify-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-500">
                  <span className="text-[#5F60FA] text-3xl sm:text-4xl md:text-5xl italic">{data.questionsAnswered}</span>/{data.totalQuestions}
                </p>
              </div>
            </div>
          </div>

          {/* Answer Accuracy Chart */}
          <div className="w-full lg:w-[594px] h-[253px] rounded shadow p-4 flex flex-col items-start gap-2">
            <h3 className="text-center text-sm sm:text-base md:text-lg w-full">Answer Accuracy</h3>
            <div className="w-full flex-1 flex items-center justify-center">
              <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center">
                <AccuracyChart data={chartData} />
              </div>
            </div>
          </div>

          {/* Role Fit Percentage */}
          <div className="w-full sm:w-[291px] lg:w-1/3 h-[253px] border rounded shadow p-4 flex flex-col items-center justify-between gap-2">
            <h3 className="text-center text-sm sm:text-base md:text-lg">Role fit based on Interview</h3>
            <div className="flex flex-col items-center justify-center flex-1">
              <SemiPie data={exampleDataGraph} />
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-center w-full ml-4">{exampleData.roleFitPercentage}%</p>
          </div>
        </div>

        {/* Encouragement Section */}
        <div className="w-full flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
          <div className="w-full max-w-[1252px] h-full bg-blue-50 p-4 text-center rounded shadow flex flex-col items-center justify-center gap-4">
            <p className="text-black text-base sm:text-lg md:text-xl">Persistence is the key. Give it another shot?</p>
            <div className="flex justify-center gap-2">
              <button className="flex items-center justify-center w-24 sm:w-28 h-8 sm:h-10 rounded bg-[#5F60FA] text-white text-xs sm:text-sm gap-2">
                <img src={fallback} alt="" className="w-3 sm:w-4" />
                <span>Try Again</span>
              </button>
              <button className="w-24 sm:w-28 h-8 sm:h-10 rounded border border-[#5F60FA] text-[#5F60FA] bg-white text-xs sm:text-sm">
                <span>New Interview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="w-full mt-4 sm:mt-6 md:mt-8 flex flex-col items-center">
          <div className="w-full max-w-[1252px] h-full rounded p-4">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4">Show off your skills or Challenge your friends</p>
            <div className="w-full border rounded p-4 mb-4">
              <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4">
                <div className="border border-gray-300 rounded px-2 py-1 w-full sm:w-2/3 text-sm flex justify-between">
                  <input type="email" value={data.email} readOnly className="flex-grow mr-2" />
                  <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">Send on email</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="linkedin" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter"  />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
