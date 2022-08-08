import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticePage from './PracticePage';
import PracticeSummary from './PracticeSummary';
import PracticeSetup from './PracticeSetup';
import PreviousPractice from './PreviousPractice';
import ViewAll from "./ViewAll";
import Chat from "./Chat";
import { useSelector, useDispatch } from 'react-redux';
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Page = () =>  {
    const therapist = useSelector((state) => state.user);

    if (therapist.Name !== "") {
        socket.emit("join_room", 1);
    }

    return (
        <div>
        <div>
            <Routes>
                {/* <Route exact path='/' element={<PracticeSetup/>} /> */}
                <Route path="/practiceSetup" element={<PracticeSetup/>} />
                <Route path="/practicePage" element={<PracticePage/>} />
                <Route path="/practiceSummary" element={<PracticeSummary/>} />
                <Route path="/previousPractice" element={<PreviousPractice/>} />
                <Route path="/viewAllPatient" element={<ViewAll viewAt ={"patient"}/>} />
                <Route path="/viewAllTherapist" element={<ViewAll viewAt ={"therapist"}/>} />
            </Routes>
            </div>
            <div>
                <input type="checkbox" id="check"/> 
                <label className="chat-btn" htmlFor="check">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg>
                      <i className="fa fa-close close"></i> 
                      </label> 
                      
                      <div className="wrapper"> 
                      <Chat socket={socket} username={therapist.Name} room={1} />
                      {/* <div class="header"> 
                      <h6>Let's Chat - Online</h6> 
                      </div>
                       <div class="text-center p-2"> 
                       <span>Please fill out the form to start chat!</span> 
                       </div>
                        <div class="chat-form"> 
                        <input type="text" class="form-control" placeholder="Name"/> 
                        <input type="text" class="form-control" placeholder="Email"/> 
                        <textarea class="form-control" placeholder="Your Text Message"></textarea>
                         <button class="btn btn-success btn-block">Submit</button> 
                         </div>  */}
                         </div>
        </div>
        </div>
    )
}
export default Page;