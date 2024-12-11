import FeedbackForm from "./components/FeedbackForm"
import ReportPage from "./components/ReportPage"
import { exampleData } from "./components/ReportPage"


export default function App() {

  return (
    <div>
      {/* <FeedbackForm/> */}
      <ReportPage data={exampleData}/>

    </div>
  )
}
