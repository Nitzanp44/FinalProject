import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {changeLogin,loggOut} from '../actions/index'

const ManagerNavigationBar = () => {
    const therapist = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logOut = () =>{
        if(window.confirm("השינויים שביצעת לא יישמרו. האם את/ה בטוח שברצונך לצאת?")){
            dispatch(loggOut());
            dispatch(changeLogin());
        }
    }

    return (
        <div> 
            <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5 py-3 bgNavbar">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <button type="button" className="btn btn-link" onClick={logOut}>התנתק</button>
                        <span className="navbar-text-primary">שלום {therapist.Name}</span>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/practicePage"}>פרטי משקולות</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/viewAllPatient"}>פרטי מטופלים</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/viewAllTherapist"}>פרטי מטפלים</Link>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>  
        </div>
    )

}
export default ManagerNavigationBar;