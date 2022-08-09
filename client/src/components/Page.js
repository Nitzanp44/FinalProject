import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticePage from './PracticePage';
import PracticeSummary from './PracticeSummary';
import PracticeSetup from './PracticeSetup';
import PreviousPractice from './PreviousPractice';
import ViewAll from "./ViewAll";
import ViewAllWeights from "./ViewAllWeights";

const Page = () =>  {

    return (
        <div>
            <Routes>
                <Route exact path='/' element={<PracticeSetup/>} />
                <Route path="/practiceSetup" element={<PracticeSetup/>} />
                <Route path="/practicePage" element={<PracticePage/>} />
                <Route path="/practiceSummary" element={<PracticeSummary/>} />
                <Route path="/previousPractice" element={<PreviousPractice/>} />
                <Route path="/viewAllPatient" element={<ViewAll viewAt ={"patient"}/>} />
                <Route path="/viewAllTherapist" element={<ViewAll viewAt ={"therapist"}/>} />
                <Route path="/viewAllWeights" element={<ViewAllWeights/>} />
            </Routes>
        </div>
    )
}
export default Page;