import React from "react";
import arrowDownward from "../assets/arrowDownward.svg";
import instagram from "../assets/instagramsvg.svg";
import facebook from "../assets/facebooksvg.svg";
import linkedin from "../assets/linkedinsvg.svg";
import twitter from "../assets/twittersvg.svg";
import AccuracyChart from "./AccuracyChart";
import SemiPie from "./SemiCirclePieChart";
import fallback from "../assets/fallback.svg";
import mail from "../assets/mail.svg"

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
  roleFitPercentage: 60, // 67% fit
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
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[1292px] h-[993px] absolute top-[24px] left-[74px] flex flex-col gap-[20px]">
        <div className="lg:w-[1292px] lg:h-[684px] rounded-[7px] lg:px-[20px] lg:py-[29px] border flex flex-col justify-between">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center lg:w-[1252px] lg:h-[40px] lg:gap-[799px]">
            <h1 className="font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight text-center sm:text-left">Your Interview Report is here.</h1>
            <button className="w-full sm:w-[119px] md:w-28 lg:w-32 h-10 sm:h-[40px] border rounded py-1 flex items-center justify-center gap-2 sm:gap-4 bg-[#5F60FA] text-white mt-2 sm:mt-0">
              <img src={arrowDownward} alt="downwardsarrow" className="lg:w-[16px] lg:h-[16px] sm:w-5 md:w-6" />
              <span className="text-sm sm:text-base md:text-lg lg:text-[14px]">Download</span>
            </button>
          </div>
          {/* User Details */}
          <div className="gap-2 sm:gap-4 flex flex-col lg:w-[1252px] lg:h-[100px] lg:gap-[12px]">
            <div className="flex flex-row  lg:w-[1252px] lg:h-[44px] items-center lg:gap-[10px]">
                <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[20px] lg:leading-[24px] text-[#121212]">
                  Name:
                </p>
                <p className="text-[#5E5E5E] lg:text-[20px] lg:leading-[24px]">
                  {data.name}
                </p>
            </div>
            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#121212] lg:w-[1252px] lg:h-[44px]">
              Job Role: <span className="font-normal text-[#5E5E5E]">{data.jobRole}</span>
            </p>
          </div>

          {/* Metrics Section */}
          <div className="flex sm:flex-col md:flex-col lg:flex-row items-center justify-between lg:w-[1252px] lg:h-[253px]">
            {/* Number of Questions Answered */}
            <div className="w-full sm:w-[291px] lg:w-[291px] lg:h-[253px] border rounded shadow flex flex-col items-center justify-center lg:gap-[10px] border-[#D8D8D8]">
                <div className="lg:w-[221px] lg:h-[58px] lg:top-[16px] lg:left-[28px] lg:p-[10px] lg:gap-[10px] ">
                  <h3 className="flex text-center lg:text-[14px]">Number of questions answered</h3>
                </div>

                <div className="lg:w-[262px] lg:h-[139px]  sm:h-24 md:h-28 rounded bg-[#F9F9FF] flex items-center justify-center">
                  <p>
                    <span className="text-[#5F60FA] lg:text-[48px] lg:font-normal lg:leading-[57.6px] sm:text-4xl md:text-5xl ">{data.questionsAnswered}</span>

                    <span className="lg:text-[35px]  lg:leading-[42px] sm:text-2xl md:text-3xl font-normal text-center text-[#8E8FB7] italic">/{data.totalQuestions}</span>
                  </p>
                </div>
            </div>

            {/* Answer Accuracy Chart */}
            <div className="w-full lg:w-[594px] lg:h-[253px] border rounded shadow  flex flex-col items-center justify-center lg:gap-[10px] border-[#D8D8D8]">
              <div className="lg:w-[293px] lg:h-[37px] lg:p-[10px] gap-[10px]">
                <h3 className="text-center lg:text-[14px] font-normal lg:leading-[16.8px] sm:text-base md:text-lg ">Answer Accuracy</h3>
              </div>

                <div className="lg:w-[537px] lg:h-[171.61px] sm:h-28 md:h-32">
                  <AccuracyChart data={chartData} />
                </div>

            </div>

            {/* Role Fit Percentage */}
            <div className="w-full sm:w-[291px] lg:w-[305px] lg:h-[253px] border rounded shadow flex flex-col items-center justify-center lg:gap-[10px] border-[#D8D8D8]">
              <div className="lg:[190px] lg:h-[37px] p-[10px]">
                <h3 className="text-center lg:text-[14px] lg:leading-[16.8px] sm:text-base md:text-lg font-normal">Role fit based on Interview</h3>
              </div>
              <div className="lg:w-[201px] lg:h-[104px] lg:top-[124px] ">
                <SemiPie data={exampleDataGraph} />
              </div>
              <p className="lg:text-[33px] sm:text-2xl md:text-3xl text-center w-full ml-4 text-[#5F60FA]">{exampleData.roleFitPercentage}%</p>
            </div>
          </div>

          {/* Encouragement Section */}
          <div className="lg:w-[1252px] lg:h-[143px] border rounded-[10px] lg:py-[9px] lg:px-[364px] flex flex-col items-center justify-center sm:mt-6 md:mt-8 lg:gap-[10px] bg-blue-500">

              <div className="lg:w-[524px] lg:h-[107px] flex flex-col items-center justify-center lg:gap-[6px]">
                  <div className="lg:w-[524px] lg:h-[49px] lg:p-[10px] text-center">
                    <p className="text-black text-base sm:text-lg md:text-xl">Persistence is the key. Give it another shot?</p>
                  </div>
                  <div className="flex justify-center lg:w-[282px] lg:h-[52px] lg:gap-[6px] ">
                    <div className="lg:w-[136px] lg:h-[52px] lg:p-[10px]">
                      <button className="flex items-center justify-center w-24 sm:w-28 h-8 sm:h-10 rounded bg-[#5F60FA] text-white text-xs sm:text-sm gap-2">
                        <img src={fallback} alt="" className="w-3 sm:w-4" />
                        <span>Try Again</span>
                      </button>
                    </div>
                    <div className="lg:w-[140px] lg:h-[52px] lg:p-[10px]">
                      <button className="w-24 sm:w-28 h-8 sm:h-10 rounded border border-[#5F60FA] text-[#5F60FA] bg-white text-xs sm:text-sm">
                        <span>New Interview</span>
                      </button>
                    </div>
                  </div>
              </div>

          </div>
        </div>

        {/* Share Section */}
        <div className="lg:w-[1292px] lg:h-[289px] sm:mt-6 md:mt-8 border-[1px] lg:px-[20px] lg:py-[10px] border-[#F8F8F8] rounded-[7px]">
          <div className="lg:w-[1252px] lg:h-[254px] ">
            <div className="lg:w-[509px] lg:h-[78px] lg:pt-[10px] lg:pb-[10px] ">
              <p className="font-normal lg:text-[24px] lg:leading-[28.8px]">Show off your skills or Challenge your friends</p>
            </div>
            <div className="lg:w-[1252] lg:h-[176px] border rounded-[8px] lg:px-[10px] lg:py-[12px] flex flex-col justify-center items-center lg:gap-[10px]">
              <div className="lg:w-[896px] lg:h-[79px] flex flex-col justify-center items-center">
                <div className="border border-gray-300 rounded px-2 py-1 w-full sm:w-2/3 text-sm flex flex-row justify-between items-center">
                  <div>
                    <input type="email" value={data.email} readOnly className="lg:w-[204px] lg:h-[37px] lg:p-[10px]" />
                  </div>
                  <div className="lg:w-[166px] lg:h-[60px] lg:p-[10px]">
                    <button className="lg:w-[146px] lg:h-[46px] border rounded-[4px] lg:px-[16px] lg:py-[1px] flex items-center justify-around  bg-[#5F60FA]">
                      <img src={mail} alt="" />
                      <span className="text-white lg:text-[14px] text-right">Send on email</span>
                    </button>
                  </div>

                </div>

              </div>

              <div className="flex justify-center gap-4">
                <img src={linkedin} alt="linkedin"/>
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter"  />
                <img src={facebook} alt="facebook" />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
