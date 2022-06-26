import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticePage from './PracticePage'
import PracticeSummary from './PracticeSummary'
import PracticeSetup from './PracticeSetup'
import PreviousPractice from './PreviousPractice'

const Page = () =>  {
 
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<PracticePage/>} />
                <Route path="/practiceSetup" element={<PracticeSetup/>} />
                <Route path="/practicePage" element={<PracticePage/>} />
                <Route path="/practiceSummary" element={<PracticeSummary/>} />
                <Route path="/previousPractice" element={<PreviousPractice/>} />
            </Routes>
        </div>
    )
}
export default Page;