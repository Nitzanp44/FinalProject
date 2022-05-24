import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {changeLogin,loggOut} from '../actions/index'

const NavigationBar = () => {
    const therapist = useSelector((state) => state.user);
    const dispatch = useDispatch();

    function logOut(){
        console.log("logout");
        dispatch(loggOut());
        dispatch(changeLogin());

    }

    return (
        <div> 
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <button type="button" class="btn btn-link" onClick={logOut}>התנתק</button>
                        <span class="navbar-text-primary">
                            שלום {therapist.Name} 
                            </span>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/PracticeSetup"}>הגדרת אימון</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/practicePage"}>צפייה באימון</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/practiceSummary"}>סיכום אימון</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/previousPractice"}>אימונים קודמים</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>  
        </div>
    )

}
export default NavigationBar;