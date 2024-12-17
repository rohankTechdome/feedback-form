import FeedbackForm from "./components/FeedbackForm"
import ReportPage from "./components/ReportPage"
import { exampleData } from "./components/ReportPage"
import PauseCard from "./components/PauseCard"
import TextAreaWithCounter from "./components/TextAreaWithCounter"
import Tooltip from "./components/Tooltip"
export default function App() {

  return (
    <div>
      <FeedbackForm/>
      {/* <ReportPage data={exampleData}/> */}
      {/* <TextAreaWithCounter/> */}
      {/* <div className="flex justify-center items-center h-screen bg-gray-100">
            <p className="mr-4">
              Device Setup
            </p>
        <Tooltip text="Supporting text" heading="Camera">
          <div className="w-[16px] h-[16px] bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer">

            <span className="text-[10px]">
              i
            </span>
          </div>
        </Tooltip>
      </div> */}



    </div>
  )
}
